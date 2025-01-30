import { useState, useEffect } from "react";
import { IUsersResponse } from "../../models/IUsersResponse";
import { IRecipeResponse } from "../../models/IRecipeResponse";
import { search } from "../../services/api.services";


export const useSearchResults = (query: string) => {
    const [users, setUsers] = useState<IUsersResponse | null>(null);
    const [recipes, setRecipes] = useState<IRecipeResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (query) {
            const fetchResults = async () => {
                try {
                    const usersResults = await search("users", query);
                    const recipesResults = await search("recipes", query);

                    setUsers("users" in usersResults ? usersResults as IUsersResponse : null);
                    setRecipes("recipes" in recipesResults ? recipesResults as IRecipeResponse : null);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchResults();
        }
    }, [query]);

    return { users, recipes, loading };
};
