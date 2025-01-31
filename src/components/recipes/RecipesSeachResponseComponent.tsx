import { FC } from "react";
import { IRecipe } from "../../models/IRecipe";
import RecipeComponent from "../recipe/RecipeComponent";



interface RecipeComponentProps {
    recipe: IRecipe;
}

const RecipesSearchResponseComponent:FC<RecipeComponentProps> = ({ recipe }) => {
    return (
        <div className='border-t-2 border-red-950 w-full h-full bg-red-50 m-0'>
            {<RecipeComponent recipe={recipe} key={recipe.id}/>}
        </div>
    );
};

export default RecipesSearchResponseComponent;
