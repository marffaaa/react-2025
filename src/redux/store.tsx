import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice/userSlice";
import { recipeSlice } from "./slices/recipeSlice/recipeSlice";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        recipeSlice: recipeSlice.reducer
    }
});