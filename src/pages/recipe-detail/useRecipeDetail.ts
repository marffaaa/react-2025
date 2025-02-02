import { useState, useEffect } from "react";
import { getRecipeById } from "../../services/recipe.api.services";
import { IRecipe } from "../../models/IRecipe";


export const useRecipeDetail = (id: string | undefined) => {
    const [recipe, setRecipe] = useState<IRecipe | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const recipeId = parseInt(id);
            if (!isNaN(recipeId)) {
                getRecipeById(recipeId)
                    .then((data) => {
                        setRecipe(data);
                        setError(null);
                    })
                    .catch(() => {
                        setError("Recipe not found");
                    });
            } else {
                setError("Invalid recipe ID");
            }
        }
    }, [id]);

    return { recipe, error };
};
