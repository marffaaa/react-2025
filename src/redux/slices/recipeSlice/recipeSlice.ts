import {createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit"
import {IRecipe} from "../../../models/IRecipe"
import {loadRecipe} from "./loadRecipe"
import {loadRecipes} from "./loadRecipes"


type RecipeSliceType={
    recipes : IRecipe[]
    recipe : IRecipe|null,
    loadState: boolean
}

const recipeInitialState: RecipeSliceType= {recipes:[], recipe: null, loadState: false}
export const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: recipeInitialState,
    reducers:{
        changeLoadState : (state, action: PayloadAction<boolean>)=>{
            state.loadState = action.payload
        }
    },
    extraReducers: bilder =>
        bilder
            .addCase(loadRecipes.fulfilled, (state, action: PayloadAction<IRecipe[]>)=>{
                state.recipes = action.payload
            })
            .addCase(loadRecipes.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })
            .addCase(loadRecipe.fulfilled, (state, action: PayloadAction<IRecipe>)=>{
                state.recipe = action.payload
            })
            .addMatcher(isFulfilled(loadRecipes, loadRecipe), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected(loadRecipe, loadRecipes),(state) =>{
                console.log(state)
            })
})

export const userSliceAction = {
    ...recipeSlice.actions, loadRecipe, loadRecipes
}