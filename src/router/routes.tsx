import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import SingleUserDetailsPage from "../pages/SingleUserDetailsPage";

 export const routes = createBrowserRouter([
    {path: '/', element: <Layout/>, children:
            [{index: true, element: <HomePage/> },// аналог path:''
                {path: 'users', element: <UsersPage/> },
                {path: 'users/details', element: <SingleUserDetailsPage/> },
                {path: 'posts', element: <PostsPage/> },]
    }
])