import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";


const Selected = ({ product }) => {
    const { product_title, price, product_image, product_id } = product;
    const [value, setValue] = useState(false);
    const addDeleteClickHandler = ()=>{
        setValue(true);
    }
    if(value){
        return null;
    }
    
    return (
        <div className='card card-compact bg-base-100 w-96 shadow-xl transition duration-7000 hover:scale-110 hover:shadow-2xl'>
            <div className='flex justify-end'>
                <figure>
                    <img src={product_image} alt="" />

                </figure>
                <div>
                    <IoIosCloseCircleOutline onClick={addDeleteClickHandler} className='size-9 transition duration-300 ease-in-out border-none transform hover:scale-125 hover:shadow-[0_0_15px_rgba(0,123,255,0.6)]' />
                </div>
            </div>
            <div className="card-body">
                <h1>{product_title}</h1>
                <p>{price}</p>
                <div className="card-actions justify-center">
                    {/* CROSS BUTTON IF PUSHED THen Product has t obe dissapeared */}

                </div>

            </div>




        </div>
    );
};

export default Selected;