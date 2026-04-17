import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex max-h-[80vh] justify-center items-center'>
            <div className='text-center text-2xl font-bold loading loading-bars loading-xl'></div>;
        </div>
    );
};

export default loading;