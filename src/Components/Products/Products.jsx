import React from 'react';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();


    return (
        <div>
            <h1>Products {products.length}</h1>
            <div className='card grid md:grid-cols-3  gap-12'>
              
                {
                    products.map( product =><Product key={products.id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;