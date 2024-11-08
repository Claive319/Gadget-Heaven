import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Laptop from '../Laptop/Laptop';

const Laptops = () => {
    const laptops = useLoaderData();
    const laptopFind = laptops.filter(laptop=> laptop.product_id.toLowerCase().includes('lap'))
    return (
        <div>
            <div>
                <h1>Products {laptops.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        laptopFind.map(lap=><Laptop key={laptopFind.id} lap={lap}></Laptop>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Laptops;