import React from 'react';
import Phone from '../Phone/Phone';
import { useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    const phoneFind = phones.filter(phone => phone.product_id.toLowerCase().includes('phn'))
    return (
        <div>
            <div>
                <h1>Products {phones.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        phoneFind.map(ph => <Phone key={phoneFind.id} ph={ph}></Phone>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Phones;