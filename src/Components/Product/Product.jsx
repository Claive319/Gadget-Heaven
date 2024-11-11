import { useLoaderData, useNavigate } from "react-router-dom"


const Product = ({produce }) => {
    
    const { product_title, price, product_image, product_id} = produce
    const navigate = useNavigate();
    const handleDetailsbtn = ()=>{
        navigate(`/products/${product_id}`)
    }

    return (
       
        <div className='card card-compact bg-base-100 w-96 shadow-xl transition duration-7000 hover:scale-110 hover:shadow-2xl'>
            <figure>
                <img src={product_image} alt="" />

            </figure>
            <div className="card-body">
                <h1>{product_title}</h1>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleDetailsbtn} className="btn btn-primary">View Details</button>
                </div>

            </div>




        </div>
    );
};

export default Product;