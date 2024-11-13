import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Products from "../Components/Products/Products";



import Productdetails from "../pages/Productdetails";
import Home from "../Components/Home/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Selected from "../Components/SelectedProduct/Selected";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/Categories.json'),
                children: [
                    {
                        path: '/',
                        loader: () => fetch('/Productsdata.json'),
                        element: <Products></Products>

                    },
                    {
                        path: '/products/:product',
                        loader: () => fetch('/Productsdata.json'),
                        element: <Products></Products>

                    },
                    
                    // {
                    //     path: '/products/:macbook',
                    //     loader: () => fetch('/Productsdata.json'),
                    //     element: <Macbooks></Macbooks>
                    // },
                    // {
                    //     path: '/products/:laptops',
                    //     loader: () => fetch('/Productsdata.json'),
                    //     element: <Laptops></Laptops>
                    // },
                    // {
                    //     path: '/products/:phones',
                    //     loader: () => fetch('/Productsdata.json'),
                    //     element: <Phones></Phones>

                    // },
                    // {
                    //     path: '/products/:accessories',
                    //     loader: () => fetch('/Productsdata.json'),
                    //     element: <Accesorries></Accesorries>
                    // },
                    // {
                    //     path: '/products/:smartwatch',
                    //     loader: () => fetch('/Productsdata.json'),
                    //     element: <Smartwatches></Smartwatches>
                    // },
                    // {
                    //     path: '/products/:iphones',
                    //     loader: () => fetch('/Productsdata.json'),
                    //     element: <Iphones></Iphones>
                    // },
                   
                ],
                
            },
            {
                path: '/product/:product_id',
                loader: ()=> fetch(`/Productsdata.json`),
                element: <Productdetails></Productdetails>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: ()=>fetch('/Productsdata.json'),
              
                
            }
        ],
        
    },
])

export default routes