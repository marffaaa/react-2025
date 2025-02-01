import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IUser} from "../../../models/IUser"

type UserSliceType={
    users : IUser[]
}

const loadUsers =createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI)=>{
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
            return thunkAPI.fulfillWithValue(users)
        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

const userInitialState: UserSliceType= {users:[]}
export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers:{},
    extraReducers: bilder =>
        bilder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>)=>{
                state.users = action.payload
             })
            .addCase(loadUsers.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })
})

export const userSliceAction = {
    ...userSlice.actions, loadUsers
}