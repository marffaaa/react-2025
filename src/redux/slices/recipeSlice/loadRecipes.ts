import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRecipe } from "../../../models/IRecipe";

interface RecipeResponse {
    recipes: IRecipe[];
    total: number;
}

export const loadRecipes = createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (skip: string, thunkAPI) => {
        try {
            // Завантажуємо дані з API
            const response = await fetch(`https://dummyjson.com/recipes?skip=${skip}&limit=30`);
            const data: RecipeResponse = await response.json();

            // Повертаємо рецепти
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            // Обробка помилки
            return thunkAPI.rejectWithValue('some error');
        }
    }
);
