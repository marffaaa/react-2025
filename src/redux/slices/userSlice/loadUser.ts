import { createAsyncThunk } from "@reduxjs/toolkit"

export const loadUser =createAsyncThunk(
    'userSlice/loadUser',
    async (id:string, thunkAPI)=>{
        try {
            const user = await fetch('https://dummyjson.com/users/' + id)
                .then(value => value.json())
            // thunkAPI.dispatch(userSliceAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(user)
        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)