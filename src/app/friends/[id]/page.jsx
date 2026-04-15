import Image from 'next/image';
import React from 'react';
import { Nunito } from 'next/font/google';
import { getFriends } from '@/API/api';

const nunito = Nunito({ subsets: ['latin'], weight: "600" });

const Page = async ({ params }) => {

    let res = await getFriends();

    let overdue = res.filter(fr => fr.status == "overdue");
    let track = res.filter(fr => fr.status == "on-track");
    let almostDue = res.filter(fr => fr.status == "almost due");

    let { id } = await params;
    let friendsData = await (await fetch(`http://localhost:3000/friends.json`)).json()
    let findFriend = friendsData.find(fr => fr.id === parseInt(id));
    const { picture, name, status, bio, tags } = findFriend;
    let badgeColor = "btn-success";
    if (status == "overdue") {
        badgeColor = "btn-error ";
    }
    else if (status == "almost due") {
        badgeColor = "btn-warning ";
    }
    return (
        <div className='mx-auto container gap-10 justify-center flex bg-base-200 mt-5 rounded-2xl  w-[70%] p-5'>
            <div className='text-center px-10 py-5 rounded-2xl bg-base-100 w-full md:w-1/3 justify-around'>
                <div>
                    <Image alt={name} src={picture} className='mx-auto rounded-full w-auto' width={100} height={100} />
                    <p className='my-3 font-bold text-xl'>{name}</p>
                    <p className={`${badgeColor} rounded-full btn-sm text-white btn`}>{status}</p><br />
                    <div className="btn   btn-success btn-soft rounded-full mx-2">{tags[0]}</div>
                    <q className='block italic m-auto'>{bio}</q>

                </div>
                <div className='flex gap-2 mt-5 flex-col'>
                    <button className='btn bg-base-100'>
                        <span className='far fa-bell fa-slab'></span>
                        Snooz 2 weeks
                    </button>
                    <button className='btn bg-base-100'>
                        <i className="far fa-box-archive"></i>
                        Archive
                    </button>
                    <button className='btn bg-base-100'>
                        <i className="far fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
            
            <div>
                <div className='px-2 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <Stats title={"Total"} stat={res.length} />
                    <Stats title={"On Track"} stat={track.length} />
                    <Stats title={"Need Attention"} stat={overdue.length} />
                </div>
            </div>
        </div>
    );
};



export const Stats = ({ title, stat }) => {
    return (
        <div className="stats shadow bg-base-100">
            <div className="stat overflow-hidden">
                <div className={`${nunito.className} stat-value text-center `}>{stat}</div>
                <div className={` ${nunito.className} text-lg text-center stat-title`}>{title}</div>
            </div>
        </div>
    )
}



export default Page;