import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import CarsPage from "../pages/CarsPage";
import CreateNewCarPage from "../pages/CreateNewCarPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path:'cars', element:<CarsPage/>},
            {path:'cars/create', element:<CreateNewCarPage/>},

        ]
    }
])