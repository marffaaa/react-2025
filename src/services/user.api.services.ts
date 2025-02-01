import { IRecipe } from "../models/IRecipe";
import { IUser } from "../models/IUser";
import { IUsersResponse } from "../models/IUsersResponse";
import { getAuthAxios } from "./authAxiosInstance";


export const getAllUsers = async (skip: string): Promise<IUsersResponse> => {
    try {
        const axiosInstance = getAuthAxios();
        const response = await axiosInstance.get<IUsersResponse>(`https://dummyjson.com/users?skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const getUserById = async (id: number): Promise<IUser> => {
    try {
        const axiosInstance = getAuthAxios();
        const response = await axiosInstance.get<IUser>(`https://dummyjson.com/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw new Error("User not found");
    }
};

export const getAllUserRecipes = async (): Promise<IRecipe[]> => {
    try {
        const axiosInstance = getAuthAxios();
        const response = await axiosInstance.get<{ recipes: IRecipe[] }>("https://dummyjson.com/recipes");
        return response.data.recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};
