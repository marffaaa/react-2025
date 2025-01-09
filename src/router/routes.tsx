import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";

 export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children:
            [{index: true, element: <HomePage/> },// аналог path:''
                {path: 'users', element: <UsersPage/> },
                {path: 'posts', element: <PostsPage/> },]
    }
])