import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Products from "../Components/Products/Products";
import Macbook from "../Components/Macbook/Macbook";
import Macbooks from "../Components/MacBooks/Macbooks";
import Laptops from "../Components/Laptops/Laptops";
import Phones from "../Components/Phones/Phones";
import Accesorries from "../Components/Accesories/Accesorries";
import Smartwatches from "../Components/Smartwatches/Smartwatches";
import Iphones from "../Components/Iphones/Iphones";


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
                loader: ()=>fetch('Productsdata.json'),
                element: <Macbooks></Macbooks>
            },
            {
                path:'/laptops',
                loader: ()=>fetch('Productsdata.json'),
                element: <Laptops></Laptops>
            },
            {
                path:'/phones',
                loader: ()=>fetch('Productsdata.json'),
                element: <Phones></Phones>
            },
            {
                path:'/accessories',
                loader: ()=>fetch('Productsdata.json'),
                element: <Accesorries></Accesorries>
            },
            {
                path:'/smartwatch',
                loader: ()=>fetch('Productsdata.json'),
                element: <Smartwatches></Smartwatches>
            },
            {
                path:'/iphones',
                loader: ()=>fetch('Productsdata.json'),
                element: <Iphones></Iphones>
            },
        ]
    }
])
 
export default routes