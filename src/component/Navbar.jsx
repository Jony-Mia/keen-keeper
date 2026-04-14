import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className=" flex gap-2.5 px-1">
                    <li>
                        <Link href={"/"}>
                            <button className='btn btn-outline'>
                                <span className='fa fa-home'></span>
                                Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/timeline"}>
                            <button className='btn btn-outline'>
                                <span className='fa fa-clock'></span>
                                Timeline
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/stats"}>
                            <button className='btn btn-outline'>
                                <i className="fa-sharp fa-solid fa-chart-area"></i>
                                Stats
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;