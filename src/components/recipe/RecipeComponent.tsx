import { FC } from "react";
import { IRecipe } from "../../models/IRecipe";

type PropsType ={
    recipe: IRecipe
}

const RecipeComponent: FC<PropsType> = ({recipe}) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.tags.map(tag => `#${tag}`).join(' ')}</p>
        </div>
    );
};

export default RecipeComponent;
