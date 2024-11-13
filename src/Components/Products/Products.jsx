import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useLoaderData, useParams } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    const { product } = useParams();
    const [justProduct, setJustProduct] = useState([])
    useEffect(() => {
        if (product) {
            const productsContainer = [...products].filter(prod => prod.category === product);
            setJustProduct(productsContainer)
        }
        else {
            setJustProduct(products);
        }
    }, [product, products])


    // console.log(productsContainer);


    return (
        <>
            <div className=''>


                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        justProduct.map(produce => <Product key={produce.id} produce={produce}></Product>)
                    }
                    

                </div>
            </div>
        </>

    );
};

export default Products;