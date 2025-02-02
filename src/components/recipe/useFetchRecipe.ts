import { useState, useEffect } from "react";

const useFetchRecipe = (id: string | undefined) => {
    const [recipe, setRecipe] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                try {
                    const response = await fetch(`https://api.example.com/recipes/${id}`);
                    const data = await response.json();
                    setRecipe(data);
                } catch (error) {
                    console.error("Error fetching recipe:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchRecipe();
    }, [id]);

    return { recipe, loading };
};

export default useFetchRecipe;
