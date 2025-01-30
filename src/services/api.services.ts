import { urls } from "../constants/urls";
import { IRecipe } from "../models/IRecipe";
import { IRecipeResponse } from "../models/IRecipeResponse";
import { IUser } from "../models/IUser";
import { IUsersResponse } from "../models/IUsersResponse";

export const getAllUsers = async (skip: string): Promise<IUsersResponse> => {
    return await fetch(urls.users.allUsers + '?skip=' + skip)
        .then(response => response.json());
};

export const getUserById = async (id: number): Promise<IUser> => {
    const response = await fetch(urls.users.byID(id)); // викликаємо функцію з параметром id
    if (!response.ok) {
        throw new Error("User not found");
    }
    return response.json();
};



export const getAllRecipes = async (skip: string): Promise<IRecipeResponse> => {
    return await fetch(urls.recipes.allRecipes + '?skip=' + skip)
        .then(response => response.json());
};

export const getRecipeById = async (id: string): Promise<IRecipe> => {
    return await fetch(urls.recipes.recipeById + id)
        .then(response => response.json());
};


type SearchResponse = IUsersResponse | IRecipeResponse;

export const search = async (type: "users" | "recipes", query: string): Promise<SearchResponse> => {
    const url = type === "users"
        ? `${urls.users.allUsers}?search=${query}` : `${urls.recipes.allRecipes}?search=${query}`;

    return await fetch(url)
        .then(response => response.json());
};