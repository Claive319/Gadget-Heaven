import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Smartwatch from '../Smartwatch/Smartwatch';

const Smartwatches = () => {
    const smartWatches = useLoaderData();
    const smartWatchesFind = smartWatches.filter(smartwatch=> smartwatch.description.toLowerCase().includes('smartwatch'))
    return (
        <div>
            <div>
                <h1>Products {smartWatchesFind.length}</h1>
                <div className='card grid md:grid-cols-3  gap-12'>

                    {
                        smartWatchesFind.map(swatch=><Smartwatch key={smartWatchesFind.id} swatch={swatch}></Smartwatch>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Smartwatches;