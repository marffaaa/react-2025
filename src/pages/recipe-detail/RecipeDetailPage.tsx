import { useParams } from "react-router-dom";
import { useRecipeDetail } from "./useRecipeDetail";
import RecipeDetailsComponent from "../../components/recipe/RecipeDetailsComponent";

const RecipeDetailPage = () => {
    const { id } = useParams();
    const { recipe, error } = useRecipeDetail(id);

    return (
        <div>
            {error ? <p>{error}</p> : (recipe ? <RecipeDetailsComponent recipe={recipe} /> : <p>Loading...</p>)}
        </div>
    );
};

export default RecipeDetailPage;
