import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='text-center text-2xl font-bold'>Friend not found</div>
            <Image src={"https://www.gtechme.com/wp-content/uploads/2025/05/Soft-404-Errors-What-They-Are-Why-They-Hurt-SEO-and-How-to-Fix-Them-image.jpg"} alt={"not found"} width={500} height={500} className={"mx-auto mt-5 rounded-lg shadow-lg"} />
        </div>
    );
};

export default page;