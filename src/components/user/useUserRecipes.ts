import { useState, useEffect } from "react";
import { IRecipe } from "../../models/IRecipe";
import { getAllUserRecipes } from "../../services/api.services";


export const useUserRecipes = (userId: number) => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Отримуємо всі рецепти
        getAllUserRecipes()
            .then((data) => {
                // Фільтруємо рецепти за userId
                const userRecipes = data.filter((recipe) => recipe.userId === userId);
                setRecipes(userRecipes); // Оновлюємо стан рецептів для цього користувача
            })
            .catch((err) => {
                setError("Failed to load recipes.");
                console.error(err);
            });
    }, [userId]); // Залежність від userId

    return { recipes, error };
};
