import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRecipe } from "../models/IRecipe";
import RecipeDetailsComponent from "../components/recipe/RecipeDetailsComponent";
import { getRecipeById } from "../services/recipe.api.services";

const RecipeDetailPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<IRecipe | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const recipeId = parseInt(id);
            // console.log('id from params:', id);
            // console.log('Parsed ID:', recipeId);

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
    }, [id]); // Залежність від id

    return (
        <div>
            {error ? <p>{error}</p> : (recipe ? <RecipeDetailsComponent recipe={recipe} /> : <p>Loading...</p>)}
        </div>
    );
};

export default RecipeDetailPage;
