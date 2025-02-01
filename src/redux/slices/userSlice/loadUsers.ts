import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadUsers =createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI)=>{
        try {
            const users = await fetch('https://dummyjson.com/users')
                .then(value => value.json())
            // thunkAPI.dispatch(userSliceAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users);

        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)