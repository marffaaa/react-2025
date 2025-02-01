import axios from "axios";
import {urls} from "../constants/urls";
import {IRecipe} from "../models/IRecipe";
import {IUser} from "../models/IUser";
import {IUsersResponse} from "../models/IUsersResponse";


export const getAllUsers = async (skip: string): Promise<IUsersResponse> => {
    try {
        const response = await axios.get<IUsersResponse>(`${urls.users.allUsers}?skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const getUserById = async (id: number): Promise<IUser> => {
    try {
        const response = await axios.get<IUser>(urls.users.byID(id));
        return response.data;
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw new Error("User not found");
    }
};

export const getAllUserRecipes = async (): Promise<IRecipe[]> => {
    try {
        const response = await axios.get<{ recipes: IRecipe[] }>("https://dummyjson.com/recipes");
        return response.data.recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};



