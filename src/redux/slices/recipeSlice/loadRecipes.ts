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
            const response = await fetch(`https://dummyjson.com/recipes?skip=${skip}&limit=30`);
            const data: RecipeResponse = await response.json();
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue('some error');
        }
    }
);
