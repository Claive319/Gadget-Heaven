
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import '../Fonts.css'

const MainLayout = () => {
    const navigate = useNavigate();
    const handleAllProductsbtn = ()=>{
        navigate('/products')
    }
    const handleMacbtn = ()=>{
        navigate('/macbook')
    }
    const handlePhonesBtn = ()=>{
        navigate('/phones')
    }
    const handleSmartWatchesBtn = ()=>{
        navigate('/smartwatch')
    }
    const handleAccessoriesBtn = ()=>{
        navigate('/accessories')
    }
    const handleLaptopsBtn = ()=>{
        navigate('/laptops')
    }
    const handleIphoneBtn = ()=>{
        navigate('/iphones')
    }
    return (
        <div className='sora-font'>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic body */}
            <div className="min-h-[calc(100vh-292px)] ">
                <div className='flex justify-around ml-10 '>
                    <div className='card flex flex-col justify-start w-[230px] gap-6 mt-20 shadow-2xl h-[558px] p-14'>
                        <button onClick={handleAllProductsbtn} className="btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">All Product</button>
                        <button onClick={handleLaptopsBtn}  className="btn  hover:btn-secondary  hover:scale-110 transition duration-3000  hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">Laptops</button>
                        <button onClick={handlePhonesBtn} className="btn  hover:btn-secondary  hover:scale-110 transition duration-3000 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">Phones</button>
                        <button onClick={handleAccessoriesBtn} className="btn  hover:btn-secondary  hover:scale-110 transition duration-3000 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">Accessories</button>
                        <button onClick={handleSmartWatchesBtn} className="btn  hover:btn-secondary  hover:scale-110 transition duration-3000 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">Smart Watches</button>
                        <button onClick={handleMacbtn} className="btn  hover:btn-secondary  hover:scale-110 transition duration-3000 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">MacBook</button>
                        <button onClick={handleIphoneBtn} className="btn  hover:btn-secondary  hover:scale-110 transition duration-3000 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white">Iphone</button>


                    </div>
                    <div className='flex justify-center items-center'>
                        <Outlet></Outlet>

                    </div>
                </div>


            </div>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;