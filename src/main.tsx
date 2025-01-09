import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {path:'/', element: <div>MainLayout1</div>},
    {path: '/', element: <div>MainLayout2</div>},
    {path: '/', element: <div>MainLayout3</div>}
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router = {router}/>)
