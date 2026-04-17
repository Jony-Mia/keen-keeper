import Image from 'next/image';
import React from 'react';

const Notfound = () => {
    return (
        <div className='flex justify-center items-center'>
            <Image alt="404" height={400} width={900} src={"https://www.gtechme.com/wp-content/uploads/2025/05/Soft-404-Errors-What-They-Are-Why-They-Hurt-SEO-and-How-to-Fix-Them-image.jpg"} />
        </div>
    );
};

export default Notfound;