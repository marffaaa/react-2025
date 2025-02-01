import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'

import { Provider, useSelector } from 'react-redux'
import {PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
import { IUser } from './models/IUser'
import { routes } from './router/routes'


type UserSliceType={
    users : IUser[]
}

const userInitialState: UserSliceType= {users:[]}

// type RecipeSliceType={
//     recipes : IRecipe[]
// }
//
// const recipeInitialState: RecipeSliceType= {recipes:[]}

const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers:{
        loadUsers: (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload
        }
    }
})

export const userSliceAction = {
    ...userSlice.actions
}

// const recipeSlice = createSlice({
//     name: "recipeSlice",
//     initialState: recipeInitialState,
//     reducers:{
//         LoadUsers: (state, action:PayloadAction<IRecipe[]>)=>{
//             state.recipes = action.payload
//         }
//     }
// })

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        // recipeSlice: recipeSlice.reducer
    }
});

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>

)