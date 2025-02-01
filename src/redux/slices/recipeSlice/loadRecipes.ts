import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadRecipes =createAsyncThunk(
    'recipeSlice/loadRecipes',
    async (_, thunkAPI)=>{
        try {
            const recipes = await fetch('https://dummyjson.com/recipes')
                .then(value => value.json())
            // thunkAPI.dispatch(userSliceAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(recipes);

        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)