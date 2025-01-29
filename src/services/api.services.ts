import { urls } from "../constants/urls";
import { IRecipeResponse } from "../models/IRecipeResponse";
import { IUsersResponse } from "../models/IUsersResponse";

export const getAllUsers = async (skip: string): Promise<IUsersResponse> => {
    return await fetch(urls.users.allUsers + '?skip=' + skip)
        .then(response => response.json());
};

export const getAllRecipes = async (skip: string): Promise<IRecipeResponse> => {
    return await fetch(urls.recipes.allRecipes + '?skip=' + skip)
        .then(response => response.json());
};

export const getRecipeById = async (id: string): Promise<IRecipeResponse> => {
    return await fetch(urls.recipes.recipeById + id)
        .then(response => response.json());
};
