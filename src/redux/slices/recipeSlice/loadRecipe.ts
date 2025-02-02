import { createAsyncThunk } from "@reduxjs/toolkit"

export const loadRecipe =createAsyncThunk(
    'recipeSlice/loadRecipe',
    async (id:string, thunkAPI)=>{
        try {
            const recipe = await fetch('https://dummyjson.com/recipes/' + id)
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(recipe)
        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)