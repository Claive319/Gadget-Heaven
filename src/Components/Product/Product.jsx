import { useLoaderData, useNavigate } from "react-router-dom"


const Product = ({produce }) => {
    
    const { product_title, price, product_image, product_id} = produce
    const navigate = useNavigate();
    const handleDetailsbtn = ()=>{
        navigate(`/product/${product_id}`)
    }

    return (
       
        <div className='card card-compact bg-base-100 w-96 shadow-xl transition duration-7000 hover:scale-110 hover:shadow-2xl'>
            <figure>
                <img src={product_image} alt="" />

            </figure>
            <div className="card-body">
                <h1>{product_title}</h1>
                <p>{price}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleDetailsbtn} className="btn btn-primary border-none  bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-125 hover:shadow-[0_0_15px_rgba(0,123,255,0.6)]">View Details</button>
                </div>

            </div>




        </div>
    );
};

export default Product;