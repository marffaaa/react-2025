import { createBrowserRouter } from "react-router-dom";
import UserDetailPage from "../pages/UserDetailPage";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import UsersPage from "../pages/UsersPage";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";

export const routes = createBrowserRouter([
    {path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/> },
            {path: 'auth', element: <AuthPage/> },
            {path: '/auth/users', element: <UsersPage/> },
            {path: '/auth/users/details', element: <UserDetailPage/> },
            {path: '/auth/recipes', element: <RecipesPage/> },
            {path: '/auth/recipes/details', element: <RecipeDetailPage/> }]
    }
])