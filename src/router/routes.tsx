import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout";
import UsersPage from "../pages/UsersPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <UsersPage /> }, // аналог path:''
        ]
    }
]);
