import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import CartsPage from "../pages/CartsPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { index: true, element: <UsersPage/>},
            {path: 'users/:id/carts', element: <CartsPage/>}

        ]
    }
]);