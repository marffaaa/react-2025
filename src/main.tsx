import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>}
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router = {router}/>)
