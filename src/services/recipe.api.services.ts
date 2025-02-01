import axios from "axios";
import { IRecipe } from "../models/IRecipe";
import { urls } from "../constants/urls";
import { IRecipeResponse } from "../models/IRecipeResponse";

export const getAllRecipes = async (skip: string): Promise<IRecipeResponse> => {
    try {
        const response = await axios.get<IRecipeResponse>(`${urls.recipes.allRecipes}?skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching all recipes:", error);
        throw error;
    }
};

export const getRecipeById = async (id: number): Promise<IRecipe> => {
    try {
        const response = await axios.get<IRecipe>(urls.recipes.recipeById(id));
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe by ID:", error);
        throw error;
    }
};
