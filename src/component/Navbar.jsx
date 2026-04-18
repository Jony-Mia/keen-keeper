"use client"
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "@/app/favicon.png"
import { usePathname } from 'next/navigation';

const Navbar = () => {
    let path = usePathname();

    return (
        <div className=' bg-base-300 block w-full'>
            <div className="navbar container mx-auto ">
                <div className="flex-1">
                    <Link href={"/"} className=" text-xl">
                        <Image src={logo} alt={"logo"} width={150} height={100} className={"mr-2"} />
                    </Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className=" flex gap-2.5 px-1">
                        <li>
                            <Link href={"/"}>
                                <button className={`${path === "/" ? 'bg-[#0d542d] text-white' : "bg-white"}  btn btn-outline `}>
                                    <span className='fa fa-home'></span>
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/timeline"}>
                                <button className={` ${path === "/timeline" ? 'bg-[#0d542d] text-white' : "bg-white"} btn btn-outline`}>
                                    <span className='fa fa-clock'></span>
                                    Timeline
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/stats"}>
                                <button className={` ${path === "/stats" ? 'bg-[#0d542d] text-white' : "bg-white"} btn btn-outline`}>
                                    <i className="fa-sharp fa-solid fa-chart-area"></i>
                                    Stats
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown block md:hidden dropdown-end dropdown-center">
                    <button className="btn p-5 rounded-full m-1"> <span className='fa fa-bars text-2xl '></span> </button>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <Link href={"/"}>
                                <span className='fa fa-home'></span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/timeline"}>
                                <span className='fa fa-clock'></span>
                                Timeline
                            </Link>
                        </li>
                        <li>
                            <Link href={"/stats"}>
                                <i className="fa-sharp fa-solid fa-chart-area"></i>
                                Stats
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;