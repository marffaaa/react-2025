import axios from "axios";
import { urls } from "../constants/urls";
import { IRecipeResponse } from "../models/IRecipeResponse";
import { IUsersResponse } from "../models/IUsersResponse";

type SearchResponse = IUsersResponse | IRecipeResponse;

export const search = async (type: "users" | "recipes", query: string): Promise<SearchResponse> => {
    const trimmedQuery = query.trim();
    console.log("Search type:", type);
    console.log("Search query:", trimmedQuery);

    const url = type === "users"
        ? `https://dummyjson.com/users/search?q=${trimmedQuery}`
        : urls.recipes.searchRecipes(trimmedQuery);

    console.log("Fetching from URL:", url);

    try {
        const response = await axios.get<SearchResponse>(url);
        console.log("API response:", response.data);
        return response.data;
    } catch (error) {
        console.error(`Error searching ${type}:`, error);
        throw new Error(`Error searching ${type}`);
    }
};