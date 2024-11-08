import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Products from "../Components/Products/Products";
import Macbook from "../Components/Macbook/Macbook";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/products',
                loader: ()=>fetch('Productsdata.json'),
                element: <Products></Products>
            },
            {
                path: '/macbook',
                loader: ()=>fetch('MacBook.json'),
                element: <Macbook></Macbook>
            }
        ]
    }
])
 
export default routes