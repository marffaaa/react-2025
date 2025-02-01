import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit"
import {IUser} from "../../../models/IUser"

type UserSliceType={
    users : IUser[]
    user : IUser|null,
    loadState: boolean
}

const loadUsers =createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI)=>{
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
            // thunkAPI.dispatch(userSliceAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users);

        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
const loadUser =createAsyncThunk(
    'userSlice/loadUser',
    async (id:string, thunkAPI)=>{
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/user/' + id)
                .then(value => value.json())
            // thunkAPI.dispatch(userSliceAction.changeLoadState(true))
            return thunkAPI.fulfillWithValue(user)
        } catch (e){
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

const userInitialState: UserSliceType= {users:[], user: null, loadState: false}
export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers:{
        changeLoadState : (state, action: PayloadAction<boolean>)=>{
            state.loadState = action.payload
        }
    },
    extraReducers: bilder =>
        bilder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>)=>{
                state.users = action.payload
             })
            .addCase(loadUsers.rejected, (state, action)=>{
                console.log(state)
                console.log(action)
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>)=>{
                state.user = action.payload
            })
            .addMatcher(isFulfilled(loadUsers, loadUser), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected(loadUser, loadUsers),(state) =>{
                console.log(state)
            })
})

export const userSliceAction = {
    ...userSlice.actions, loadUsers, loadUser
}