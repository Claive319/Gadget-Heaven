
import { useLoaderData } from 'react-router-dom';
import Iphone from '../Iphone/Iphone';

const Iphones = () => {
    const iphones = useLoaderData();
    const iphonesFind = iphones.filter(iphone=> iphone.product_title.toLowerCase().includes('iphone'))
    return (
        <div>
            <div>
                <h1>Products {iphonesFind.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        iphonesFind.map(iph=><Iphone key={iphonesFind.id} iph={iph}></Iphone>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Iphones;