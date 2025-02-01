import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import {routes} from './router/routes'
import {store} from './redux/store'


// type RecipeSliceType={
//     recipes : IRecipe[]
// }
//
// const recipeInitialState: RecipeSliceType= {recipes:[]}

// const recipeSlice = createSlice({
//     name: "recipeSlice",
//     initialState: recipeInitialState,
//     reducers:{
//         LoadUsers: (state, action:PayloadAction<IRecipe[]>)=>{
//             state.recipes = action.payload
//         }
//     }
// })

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>

)