import { IRecipe } from "../models/IRecipe";
import { IRecipeResponse } from "../models/IRecipeResponse";
import { getAuthAxios } from "./authAxiosInstance";


export const getAllRecipes = async (skip: string): Promise<IRecipeResponse> => {
    try {
        const axiosInstance = getAuthAxios();
        const response = await axiosInstance.get<IRecipeResponse>(`https://dummyjson.com/recipes?skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getRecipeById = async (id: number): Promise<IRecipe> => {
    try {
        const axiosInstance = getAuthAxios();
        const response = await axiosInstance.get<IRecipe>(`https://dummyjson.com/recipes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
