import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice/userSlice";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        // recipeSlice: recipeSlice.reducer
    }
});