import { useParams } from "react-router-dom";
import useFetchRecipe from "./useFetchRecipe";

const RecipeDetailPage = () => {
    const { id } = useParams();
    const { recipe, loading } = useFetchRecipe(id);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((value: string, index: number) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map((value: string, index: number) => (
                    <li key={index}>{value}</li>
                ))}
            </ol>
            <p><strong>Tags:</strong> {recipe.tags.join(", ")}</p>
            <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
        </div>
    );
};

export default RecipeDetailPage;
