import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import RecipeComponent from "../recipe/RecipeComponent";
import PaginationComponent from "../pagination/PaginationComponent";
import { useEffect } from "react";
import { loadRecipes } from "../../redux/slices/recipeSlice/loadRecipes";


const RecipesComponent = () => {
    const [query] = useSearchParams();
    const dispatch = useAppDispatch();
    const { recipes, total } = useAppSelector(state => state.recipeSlice);
    const limit = 30;
    const skip = Number(query.get('skip')) || 0;

    useEffect(() => {
        dispatch(loadRecipes(skip.toString()));
    }, [skip, dispatch]);

    return (
        <div className="w-full h-full bg-red-50 m-0 pt-5">
            {recipes.map((recipe) => (
                <RecipeComponent key={recipe.id} recipe={recipe} />
            ))}
            <PaginationComponent total={total} limit={limit} />
        </div>
    );
};

export default RecipesComponent;
