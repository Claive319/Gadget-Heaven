import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { useState } from 'react';
import Dashboard from './Dashboard';
import { addToStoredProductList, addToWishList } from '../utility/addToDb';
import useTitle from '../utility/useTitle';



const Productdetails = () => {
    useTitle('||  Product Details')
    const productDetail = useLoaderData();
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        if (!isActive) {
            setIsActive(true);
        }
    };
    const { product_id } = useParams();
    const [selected, setSelected] = useState([]);
    
    const handleSelectedItenmShowbtn = (id) => {
        addToStoredProductList(id);
    }
    const handleWishListbtn = (anotherid) => {
        addToWishList(anotherid);
    }
    // console.log(productsid);
    const idFind = productDetail.find(id => id.product_id === product_id)


    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const { product_title, product_image, description, price, Specification, availability } = idFind;
    return (


        <div className='card shadow-2xl mx-auto   text-center mt-10 pb-8'>
            <div>
                <h1 className='text-4xl font-bold '>
                    {product_title}

                </h1>
                <p><small>Price : {price}Tk</small></p>
                {
                    availability ? (<btn className='btn btn-outline btn-success'>In Stock</btn>) :
                        (<btn className='btn btn-outline btn-error'>Not Available</btn>)

                }
            </div>
            <figure>
                <img className='w-[50%]' src={product_image} alt="" />
            </figure>
            <div className='card-body' >
                <h2>Post Tile: </h2>


                {
                    Specification.map((specs, index) => <ol className='text-[#09080F99] font-normal text-lg text-center' key={index}><li>{index + 1}.{specs}</li></ol>)
                }
                <div>
                    <button className='btn w-[280px]' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
            <div className='flex flex-col items-start ml-6 align justify-center'>
                <div className='flex flex-col mx-auto'>
                    <h1>Ratings</h1>
                    <div className='flex'>
                        <CiStar /><CiStar /><CiStar /><CiStar />

                    </div>
                    <div className='flex align-middle items-center'>
                        <button onClick={() => handleSelectedItenmShowbtn(product_id)} className='btn btn-success'>Add to Cart</button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`size-6 ${isActive ? 'text-white' : 'hover:text-warning'}`}
                            onClick={()=>handleWishListbtn(product_id)}
                            style={{ cursor: isActive ? 'not-allowed' : 'pointer' }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                fill={isActive ? 'red' : 'none'}
                            />
                        </svg>


                    </div>
                    <div>
                        {
                            selected.map(select => <Dashboard selected={selected}></Dashboard>)
                        }
                    </div>





                </div>



            </div>

        </div>
    );
};

export default Productdetails;