import { urls } from "../constants/urls";
import { IRecipe } from "../models/IRecipe";
import { IRecipeResponse } from "../models/IRecipeResponse";
import { IUser } from "../models/IUser";
import { IUsersResponse } from "../models/IUsersResponse";

type SearchResponse = IUsersResponse | IRecipeResponse;

export const getAllUsers = async (skip: string): Promise<IUsersResponse> => {
    return await fetch(urls.users.allUsers + '?skip=' + skip)
        .then(response => response.json());
};

export const getUserById = async (id: number): Promise<IUser> => {
    const response = await fetch(urls.users.byID(id));
    if (!response.ok) {
        throw new Error("User not found");
    }
    return response.json();
};

export const getAllUserRecipes = async (): Promise<IRecipe[]> => {
    try {
        const response = await fetch(`https://dummyjson.com/recipes`);
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

export const getAllRecipes = async (skip: string): Promise<IRecipeResponse> => {
    return await fetch(urls.recipes.allRecipes + '?skip=' + skip)
        .then(response => response.json());
};

export const getRecipeById = async (id: number): Promise<IRecipe> => {
    return await fetch(urls.recipes.recipeById(id))
        .then(response => response.json());
};

export const search = async (type: "users" | "recipes", query: string): Promise<SearchResponse> => {
    const trimmedQuery = query.trim();
    console.log("Search type:", type); // Додано для перевірки
    console.log("Search query:", trimmedQuery);

    const url = type === "users"
        ? `https://dummyjson.com/users/search?q=${trimmedQuery}`
        : urls.recipes.searchRecipes(trimmedQuery);

    console.log("Fetching from URL:", url);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error searching ${type}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response:", data);

    return data;
};


