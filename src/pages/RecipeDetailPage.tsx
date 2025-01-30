import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRecipe } from "../models/IRecipe";
import { getRecipeById } from "../services/api.services";
import RecipeDetailsComponent from "../components/recipe/RecipeDetailsComponent";

const RecipeDetailPage = () => {
    const { id } = useParams(); // Отримуємо id з параметрів URL
    const [recipe, setRecipe] = useState<IRecipe | null>(null); // Стан для зберігання рецепта
    const [error, setError] = useState<string | null>(null); // Стан для помилок

    useEffect(() => {
        if (id) {
            // Перевірка на наявність id
            const recipeId = parseInt(id); // Перетворення id в число
            console.log('id from params:', id); // Логування отриманого id
            console.log('Parsed ID:', recipeId);

            if (!isNaN(recipeId)) {
                getRecipeById(recipeId) // Отримуємо рецепт за id
                    .then((data) => {
                        setRecipe(data); // Зберігаємо отримані дані
                        setError(null); // Очищуємо помилку, якщо рецепт знайдений
                    })
                    .catch(() => {
                        setError("Recipe not found"); // Виводимо помилку, якщо не знайдено
                    });
            } else {
                setError("Invalid recipe ID"); // Помилка, якщо id не коректне
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
