import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import APage from './APage'
import BPage from './pages/BPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>,
        children:[
            {path: '', element: <HomePage/>},
            {path: 'a', element: <APage/>},
            {path: 'b', element: <BPage/>, children:[
                    {path: '1', element:<div>content1</div>},
                    {path: '2', element:<div>content2</div>},
                    {path: '3', element:<div>content3</div>}
                ]},
        ]
    },
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router = {router}/>)
