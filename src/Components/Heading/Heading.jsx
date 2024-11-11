import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col w-full justify-center items-center  bg-[#9538E2] gap-12 text-[#FFFFFF]'>
            <h1 className='text-6xl font-bold text-center mt-12'>{title}</h1>
            <p className='font-thin text-base text-center'>{subtitle}</p>
            
        </div>
    );
};

export default Heading;