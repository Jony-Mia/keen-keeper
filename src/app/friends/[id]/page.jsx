"use client";
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Nunito } from 'next/font/google';
import { getFriends } from '@/API/api';
import { TimeLineContextList } from '@/state/timeContext';
import { useParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

const nunito = Nunito({ subsets: ['latin'], weight: '600' });

// document.body.style.backgroundColor = "#f8fafc";
const Page = () => {

    const params = useParams();
    const id = parseInt(params.id, 10);
    const { timeline, setTimeLine } = useContext(TimeLineContextList);
    const [friend, setFriend] = useState([undefined]);

    useEffect(() => {
        const loadFriend = async () => {
            if (Number.isNaN(id)) {
                setFriend(null);
                return;
            }
            const friendsData = await getFriends();
            const foundFriend = friendsData?.find(fr => fr.id === id) ?? null;
            setFriend(foundFriend);
        };
        loadFriend();
    }, [id]);

    if (!friend) {
        return( <div className='text-center text-2xl font-bold'>Friend not found
         <Image src={"https://www.gtechme.com/wp-content/uploads/2025/05/Soft-404-Errors-What-They-Are-Why-They-Hurt-SEO-and-How-to-Fix-Them-image.jpg"} alt={"not found"} width={500} height={500} className={"mx-auto mt-5 rounded-lg shadow-lg"} />
        
        </div>)
    }

    const {
        picture,
        name,
        status,
        bio,
        tags = [],
        days_since_contact,
        goal,
        next_due_date
    } = friend;
    const call = {
        icon: 'far fa-phone',
        text: 'Call',
        name: name
    }
    const message = {
        icon: 'far fa-comment',
        text: 'Message',
        name: name
    }
    const video = {
        icon: 'far fa-video-camera',
        text: 'Video',
        name: name
    }
    let badgeColor = 'btn-success';
    if (status === 'overdue') {
        badgeColor = 'btn-error';
    } else if (status === 'almost due') {
        badgeColor = 'btn-warning';
    }

    function phoneCall() {
        toast.success('Phone Call ended!');
        setTimeLine([...timeline, call]);
    }
    function textMessage() {
        toast.success('Message sent successfully!');
        setTimeLine([...timeline, message]);
    }
    function videoCall() {
        toast.success('Video call ended!');
        setTimeLine([...timeline, video]);
    }
    // md:w-1/3 width of second card
    return (
        <div className='mx-auto container gap-10 justify-center mt-8 flex-wrap rounded-2xl w-full flex p-5'>
            <div className='text-center px-10 py-5 rounded-2xl bg-white lg:w-[30%] w-full md:w-full  shadow justify-around'>
                <ToastContainer />
                <div>
                    <img alt={name || null} src={picture || null} className='mx-auto rounded-full w-auto' width={100} height={100} />
                    <p className='my-3 font-bold text-xl'>{name}</p>
                    <p className={`${badgeColor} rounded-full btn-sm text-white btn`}>{status}</p><br />
                    {tags.length > 0 && (
                        <div className='flex flex-wrap justify-center gap-2 my-3'>
                            {tags.map((value, index) => (
                                <button className='btn btn-success btn-soft rounded-full px-3 py-1 text-xs' key={index}>
                                    {value}
                                </button>
                            ))}
                        </div>
                    )}
                    <q className='block italic m-auto'>{bio}</q>
                </div>
                <div className='flex container flex-wrap gap-2 mt-5 w-full flex-col'>
                    <button className='btn bg-base-100'>
                        <span className='far fa-bell fa-slab'></span>
                        Snooz 2 weeks
                    </button>
                    <button className='btn bg-base-100'>
                        <i className='far fa-box-archive'></i>
                        Archive
                    </button>
                    <button className='btn text-error bg-base-100'>
                        <i className='far fa-trash'></i>
                        Delete
                    </button>
                </div>
            </div>

            <div className='px-2 row-span-2 grid-cols-1 grid  '>
                <div className='md:px-2 md:mx-auto grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                    <Stats title={'Days Since Contact'} stat={days_since_contact} />
                    <Stats title={'Goal (Days)'} stat={goal} />
                    <Stats title={'Next Due'} stat={next_due_date} />
                </div>
                <div>
                    <div className='shadow rounded-2xl bg-white p-5 mt-4'>
                        <div className='flex justify-between items-center'>
                            <span className='font-bold text-xl'>Relationship Goals</span>
                            <button className='btn'>Edit</button>
                        </div>
                        <div>
                            <h2 className='text-muted text-xl'>Connect every <span className={`${nunito.className} font-bold`}>{goal} days</span></h2>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-6 rounded-2xl mt-5' >
                    <h2 className='text-2xl font-semibold my-4 ms-6'> Quick check in</h2>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        <button onClick={phoneCall} className='btn bg-[#f8fafc] btn-lg flex-col shadow p-10 rows-span-7'>
                            <br />
                            <p className='far fa-phone '></p>
                            <p>Call</p>
                            <br />
                        </button>
                        <button onClick={textMessage} className='btn bg-[#f8fafc] btn-lg flex-col shadow p-10'>
                            <br />
                            <p className='far fa-comment '></p>
                            <p>Message</p>
                            <br />
                        </button>
                        <button onClick={videoCall} className='btn bg-[#f8fafc] btn-lg flex-col shadow  p-10'>
                            <br />
                            <p className='far fa-video-camera '></p>
                            <p>Video</p>
                            <br />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Stats = ({ title, stat }) => {
    return (
        <div className='stats shadow bg-base-100 py-4 '>
            <div className='stat overflow-hidden flex flex-col justify-center items-center '>
                <div className={`${nunito.className} font-bold stat-value text-center py-1 text-3xl`}>{stat ?? 'N/A'}</div>
                <div className={`${nunito.className} sm:text-sm md:text-lg text-center stat-title`}>{title}</div>
            </div>
        </div>
    );
};

export default Page;
