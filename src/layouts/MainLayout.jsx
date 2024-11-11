
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

import '../Fonts.css'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    return (
        <div className='sora-font'>
            {/* Navbar */}
            <Navbar title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Navbar>
            {/* Dynamic body */}

            <div className="min-h-[calc(100vh-292px)] container mx-auto px-12">
                <div className='flex  container mx-auto  items-center'>
                    <Outlet></Outlet>

                </div>



            </div>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;