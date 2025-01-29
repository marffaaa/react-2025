import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IRecipe } from "../../models/IRecipe";
import RecipeComponent from "../recipe/RecipeComponent";
import { getAllRecipes } from "../../services/api.services";


const RecipesComponent = () => {
    const[query] = useSearchParams()
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    useEffect(() => {
        getAllRecipes((query.get('pg')) || '1').then(value => setRecipes(value.recipes))
    }, [query]);
    return (
        <div>
            {
                recipes.map((recipe) => <RecipeComponent recipe={recipe} key={recipe.id}/>)
            }
        </div>
    );
};

export default RecipesComponent;