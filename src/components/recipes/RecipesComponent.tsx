import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeComponent from "../recipe/RecipeComponent";
import PaginationComponent from "../pagination/PaginationComponent";
import { IRecipe } from "../../models/IRecipe";
import { getAllRecipes } from "../../services/recipe.api.services";


const RecipesComponent = () => {
    const [query] = useSearchParams();
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [total, setTotal] = useState<number>(0);
    const limit = 30;
    const skip = Number(query.get('skip')) || 0;

    useEffect(() => {
        getAllRecipes(skip.toString()).then((value) => {
            setRecipes(value.recipes);
            setTotal(value.total);
        });
    }, [query]);

    return (
        <div className='w-full h-full bg-red-50 m-0 pt-5'>
            {recipes.map((recipe) => (
                <RecipeComponent key={recipe.id} recipe={recipe} />
            ))}
            <PaginationComponent total={total} limit={limit} />
        </div>
    );
};

export default RecipesComponent;
