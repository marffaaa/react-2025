import { FC } from "react";
import { IRecipe } from "../../models/IRecipe";
import { Link } from "react-router-dom";  // Імпортуємо Link для створення посилання

type PropsType = {
    recipe: IRecipe;
}

const RecipeComponent: FC<PropsType> = ({ recipe }) => {
    return (
        <div>
            {/* Використовуємо Link для переходу на сторінку з деталями рецепта */}
            <h2>
                <Link to={`/auth/recipes/${recipe.id}`}>{recipe.id}. {recipe.name}</Link>
            </h2>
            <p>{recipe.tags.map(tag => `#${tag}`).join(' ')}</p>
        </div>
    );
};

export default RecipeComponent;
