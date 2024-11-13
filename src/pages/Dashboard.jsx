import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredProductList, getStoredWishList } from '../utility/addToDb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Product from '../Components/Product/Product';
import Selected from '../Components/SelectedProduct/Selected';
import WishProduct from '../Components/WishListProduct/WishProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Dashboard = () => {
    const navigate = useNavigate()
    const [productList, setProductList] = useState([]);
    const [productWishList, setProductWishList] = useState([]);

    const grabbedProducts = useLoaderData();
    const handleSort = sortBy => {
        const sorted = [...productList].sort((a, b) => b.price - a.price)
        setProductList(sorted);
    }
    const handlePurchasebtn = () => {
        toast.success("Congratulations! All products have been purchased.");
        setProductList([])
    }

    // const productCostTotal = productList.map(prictotal=> JSON.parse(prictotal.price))
    useEffect(() => {
        const storedProductList = getStoredProductList();



        const productList = grabbedProducts.filter(prod => storedProductList.includes(prod.product_id))
        setProductList(productList);
    }, [])
    useEffect(() => {
        const storedWishList = getStoredWishList();
        const productWishList = grabbedProducts.filter(wishprod => storedWishList.includes(wishprod.product_id));
        setProductWishList(productWishList);

    }, [])




    return (
        <div className='flex flex-col gap-12 justify-center'>
            <div className='bg-[#9538E2] gap-12 flex flex-col mx-auto'>
                <div className='flex flex-col text-center '>

                    <h1 className='text-6xl font-bold text-[#FFFFFF] '>DashBoard</h1>
                    <p className='font-normal align-middle text-base text-[#FFFFFF]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className='flex gap-12 justify-center mb-6'>

                    <button onClick className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-2xl rounded-[18px]  border-purple-200 bg-white hover:text-white'>Cart</button>
                    <button className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-2xl rounded-[18px]  border-purple-200 bg-white hover:text-white'>Wishlist</button>
                </div>


            </div>



            <div className='flex justify-center'>

                <Tabs className='flex flex-col '>
                    <TabList className='flex gap-10'>
                        <Tab className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-2xl rounded-[18px]  border-purple-200 bg-white hover:text-white'>Cart</Tab>
                        <Tab className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-2xl rounded-[18px]  border-purple-200 bg-white hover:text-white'>WishList</Tab>
                    </TabList>
                    <div className='flex'>
                        <TabPanel>
                            <h2>Products I Am going to Purchase : {productList.length}</h2>
                            <h2>Total Price: </h2>
                            <div className='grid md:grid-cols-3 w-full'>
                                {
                                    productList.map(product => <Selected key={product.product_id} product={product}></Selected>)
                                }


                            </div>


                        </TabPanel>
                        <TabPanel>
                            <h2>Products I want in future : { }</h2>
                            <div className='grid md:grid-cols-3'>
                                {
                                    productWishList.map(nproduce => <WishProduct key={nproduce.product_id} nproduce={nproduce}></WishProduct>)
                                }
                            </div>
                        </TabPanel>
                    </div>


                </Tabs>
                <div className='flex gap-8'>
                    <div className=''>
                        <button className='btn px-12 align-middle justify-center  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white' onClick={() => handleSort('price')}>Sort By Price</button>
                    </div>
                    <div>
                        <button onClick={handlePurchasebtn} className='btn  hover:btn-secondary -transform transform hover:scale-110 hover:shadow-xl rounded-[24px]  border-purple-200 bg-white hover:text-white'>Purchase</button>
                    </div>
                </div>


            </div>

            <ToastContainer position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                limit={3}
                style={{ width: "350px",height:"980px", fontSize: "16px" }}>


            </ToastContainer>
        </div>

    );
};

export default Dashboard;