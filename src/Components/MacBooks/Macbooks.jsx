
import { useLoaderData } from 'react-router-dom';
import Macbook from '../Macbook/Macbook';

const Macbooks = () => {
    const macs = useLoaderData();

    return (
        <div>
            <div>
                <h1>Products {macs.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        macs.map(macbook=><Macbook key={macs.id} macbook={macbook}></Macbook>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Macbooks;