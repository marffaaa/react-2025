import { FC } from "react";
import { IRecipe } from "../../models/IRecipe";
import RecipeComponent from "../recipe/RecipeComponent";



interface RecipeComponentProps {
    recipe: IRecipe;
}

const RecipesSearchResponseComponent:FC<RecipeComponentProps> = ({ recipe }) => {
    return (
        <div>
            {<RecipeComponent recipe={recipe} key={recipe.id}/>}
        </div>
    );
};

export default RecipesSearchResponseComponent;
