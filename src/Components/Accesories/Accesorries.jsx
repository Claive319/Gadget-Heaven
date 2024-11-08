import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Accessory from '../Accessory/Accessory';

const Accesorries = () => {
    const accessories = useLoaderData();
    const accessoriesFind = accessories.filter(accessory=> accessory.product_id.toLowerCase().includes('acc'))
    return (
        <div>
            <div>
                <h1>Products {accessoriesFind.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        accessoriesFind.map(acc=><Accessory key={accessoriesFind.id} acc={acc}></Accessory>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Accesorries;