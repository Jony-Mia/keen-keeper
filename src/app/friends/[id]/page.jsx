import React from 'react';

const Page = async ({params}) => {
    let {id} = await params;
    console.log(id);
    
    return (
        <div>
            
        </div>
    );
};

export default Page;