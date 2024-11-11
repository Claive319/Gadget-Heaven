import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Productdetails = () => {
    const productDetail = useLoaderData();
    const { productsid } = useParams();
    console.log(productsid);
    const idFind = productDetail.find(id => id.product_id === productsid)
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const { product_title, product_image, description, price, Specification,  } = idFind;
    return (
        <div className='card shadow-2xl mx-auto   text-center mt-10 pb-8'>
            <figure>
                <img className='w-[50%]' src={product_image} alt="" />
            </figure>
            <div className='card-body' >
                <h2>Post Tile: {product_title}</h2>
                {
                    Specification.map(specs => <ol><li>specs={specs}</li></ol>)
                }
                <div>
                    <button className='btn w-[280px]' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
            <div className='flex flex-col items-start ml-6 align justify-center'>
                <div>
                    <h1>Ratings</h1>
                    <div className='flex'>
                        <CiStar /><CiStar /><CiStar /><CiStar />

                    </div>





                </div>



            </div>

        </div>
    );
};

export default Productdetails;