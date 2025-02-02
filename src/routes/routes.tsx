import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import UsersPage from "../pages/UsersPage";
import RecipesPage from "../pages/RecipesPage";
import SearchPage from "../pages/search-results/SearchPage";
import RecipeTagPage from "../pages/recipe-tag/RecipeTagPage";
import UserDetailPage from "../pages/user-detail/UserDetailPage";
import RecipeDetailPage from "../pages/recipe-detail/RecipeDetailPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'auth', element: <AuthPage /> },
            { path: 'auth/users', element: <UsersPage /> },
            { path: 'auth/users/:userId', element: <UserDetailPage /> },
            { path: 'auth/recipes', element: <RecipesPage /> },
            { path: 'auth/recipes/:id', element: <RecipeDetailPage /> },
            { path: 'auth/recipes/tag/:tag', element: <RecipeTagPage /> },
            { path: "/search/:searchType/:query", element: <SearchPage /> }
        ]
    }
]);
