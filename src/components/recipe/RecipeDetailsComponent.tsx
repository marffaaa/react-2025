// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { fetchRecipeById } from "../redux/recipesSlice";
//
// const RecipeDetailsComponent = () => {
//     const { id } = useParams();
//     const dispatch = useAppDispatch();
//     const recipe = useAppSelector((state) => state.recipes.selectedRecipe);
//
//     useEffect(() => {
//         if (id) {
//             dispatch(fetchRecipeById(Number(id)));
//         }
//     }, [id, dispatch]);
//
//     if (!recipe) return <p>Recipe not found</p>;
//
//     return (
//         <div>
//             <h1>{recipe.name}</h1>
//             <img src={recipe.image} alt={recipe.name} />
//             <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
//             <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
//             <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
//             <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
//             <p><strong>Servings:</strong> {recipe.servings}</p>
//             <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
//             <h3>Ingredients</h3>
//             <ul>
//                 {recipe.ingredients.map((value:string, index:number) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ul>
//             <h3>Instructions</h3>
//             <ol>
//                 {recipe.instructions.map((value:string, index:number) => (
//                     <li key={index}>{value}</li>
//                 ))}
//             </ol>
//             <p><strong>Tags:</strong> {recipe.tags.join(", ")}</p>
//             <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
//         </div>
//     );
// };
//
// export default RecipeDetailsComponent;