
import { Link, useNavigate } from 'react-router-dom';

const Categories = ({categories}) => {
    const {category, product_id}= categories;
    console.log(categories);
    const navigate = useNavigate();

    // const handleAllProductsbtn = () => {
    //     navigate('/products')
    // }
    // const handleMacbtn = () => {
    //     navigate('/macbook')
    // }
    // const handlePhonesBtn = () => {
    //     navigate('/phones')
    // }
    // const handleSmartWatchesBtn = () => {
    //     navigate('/smartwatch')
    // }
    // const handleAccessoriesBtn = () => {
    //     navigate('/accessories')
    // }
    // const handleLaptopsBtn = () => {
    //     navigate('/laptops')
    // }
    // const handleIphoneBtn = () => {
    //     navigate('/iphones')
    // }
    return (
        <div className='card flex flex-col justify-start w-[230px] gap-6 mt-20 shadow-2xl h-[558px] p-14'>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white'  to='/'>All Products</Link>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' to='products/Laptop'>Laptops</Link>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' to='products/Phone'>Phones</Link>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' to='products/MacBook'>MacBook</Link>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' to='products/Smartwatches'>Smart Watches</Link>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' to='products/IPhone'>Iphones</Link>
            <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' to='products/Accessories'>Accessories</Link>
            
            {/* <Link className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' key={cj.category} to={`/products/${cj.category}`}>{cj.category}</Link> */}
        </div>
    );
};

export default Categories;