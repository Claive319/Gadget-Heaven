
import { useLoaderData } from 'react-router-dom';
import Macbook from '../Macbook/Macbook';

const Macbooks = () => {
    const macs = useLoaderData();
    const macBookfind = macs.filter(mac=> mac.product_title.toLowerCase().includes('macbook'))

    return (
        <div>
            <div>
                <h1>Products {macs.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        macBookfind.map(macbook=><Macbook key={macBookfind.id} macbook={macbook}></Macbook>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Macbooks;