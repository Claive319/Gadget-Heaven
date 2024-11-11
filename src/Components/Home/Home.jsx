import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import Heading from '../Heading/Heading';
import Categories from '../Categories/Categories';

const Home = () => {
    const categories = useLoaderData();
    
    
    return (
        <div>

            <Heading title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}> </Heading>
            <Banner></Banner>
            <div className='flex gap-20'>
                <Categories categories={categories}></Categories>
               
                <div className='flex  items-center'>
                        <Outlet></Outlet>

                    </div>


            </div>

            {/* Categories Tab section */}
            {/* Dynamic Component */}
           
        </div>
    );
};

export default Home;