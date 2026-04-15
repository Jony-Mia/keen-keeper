import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from "@/app/favicon.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href={"/"} className=" text-xl">
                    <Image src={logo} alt={"logo"} width={150} height={100} className={"mr-2"}/>
                </Link>
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