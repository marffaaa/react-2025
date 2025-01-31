import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IRecipe } from "../models/IRecipe";
import { getAllRecipes } from "../services/api.services";
import { IRecipeResponse } from "../models/IRecipeResponse";
import RecipeListComponent from "../components/recipes/RecipeListComponent";
import PaginationComponent from "../components/pagination/PaginationComponent";

const limit = 10; // Скільки рецептів відображати на сторінці

const RecipeTagPage = () => {
    const { tag } = useParams<{ tag: string }>();
    const [searchParams] = useSearchParams();
    const skip = searchParams.get("skip") || "0";

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!tag) return;

        setLoading(true);
        getAllRecipes(skip)
            .then((data: IRecipeResponse) => {
                // Фільтрація за тегом
                const filteredRecipes = data.recipes.filter((recipe: IRecipe) =>
                    recipe.tags.includes(tag)
                );
                setRecipes(filteredRecipes);
                setTotal(data.total);
            })
            .catch(() => setError("Failed to load recipes"))
            .finally(() => setLoading(false));
    }, [tag, skip]);

    return (
        <div className="p-10 min-h-screen flex flex-col justify-between border-t-2 border-red-950 w-full h-full bg-red-50 m-0">
            <div>
                <h1 className="text-3xl font-bold text-red-900 mb-5">Recipes with tag: #{tag}</h1>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-600">{error}</p>}

                {!loading && !error && recipes.length === 0 && (
                    <p className="text-gray-700">No recipes found for this tag.</p>
                )}

                {!loading && !error && recipes.length > 0 && (
                    <div className="mb-8">
                        <RecipeListComponent recipes={recipes} />
                    </div>
                )}
            </div>

            {/* Пагінація на дні */}
            <div className="flex justify-center mt-auto">
                <PaginationComponent total={total} limit={limit} />
            </div>
        </div>
    );
};

export default RecipeTagPage;
