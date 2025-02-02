import { createSlice, isFulfilled, isRejected, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../../models/IRecipe";
import { loadRecipe } from "./loadRecipe";
import { loadRecipes } from "./loadRecipes";

// Оновлений тип RecipeSliceType з доданим total
type RecipeSliceType = {
    recipes: IRecipe[];
    recipe: IRecipe | null;
    loadState: boolean;
    total: number;  // Додаємо властивість total для кількості рецептів
};

const recipeInitialState: RecipeSliceType = { recipes: [], recipe: null, loadState: false, total: 0 };  // Початкове значення для total

export const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: recipeInitialState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadRecipes.fulfilled, (state, action: PayloadAction<{ recipes: IRecipe[]; total: number }>) => {
                // Зберігаємо рецепти і total в стані
                state.recipes = action.payload.recipes;
                state.total = action.payload.total;  // Оновлюємо total
            })
            .addCase(loadRecipes.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadRecipe.fulfilled, (state, action: PayloadAction<IRecipe>) => {
                state.recipe = action.payload;
            })
            .addMatcher(isFulfilled(loadRecipes, loadRecipe), (state) => {
                state.loadState = true;
            })
            .addMatcher(isRejected(loadRecipe, loadRecipes), (state) => {
                console.log(state);
            }),
});

export const recipeSliceAction = {
    ...recipeSlice.actions,
    loadRecipe,
    loadRecipes,
};

export default recipeSlice.reducer;
