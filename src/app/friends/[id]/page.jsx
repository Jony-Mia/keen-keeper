"use client";
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Nunito } from 'next/font/google';
import { getFriends } from '@/API/api';
import { TimeLineContextList } from '@/state/timeContext';
import { useParams } from 'next/navigation';

const nunito = Nunito({ subsets: ['latin'], weight: '600' });

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
        return <div className='text-center text-2xl font-bold'>Friend not found</div>;
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

    let badgeColor = 'btn-success';
    if (status === 'overdue') {
        badgeColor = 'btn-error';
    } else if (status === 'almost due') {
        badgeColor = 'btn-warning';
    }

    function addTimeLine() {
        const checkPerson = timeline.find(cp => cp.id === id);
        console.log(checkPerson);
        if (checkPerson) {
            alert('already exist')
            return
        }
        
        setTimeLine([...timeline, { ...friend }]);
    }

    return (
        <div className='mx-auto container gap-10 justify-center flex bg-base-200 mt-5 rounded-2xl w-[70%] p-5'>
            <div className='text-center px-10 py-5 rounded-2xl bg-base-100 w-full md:w-1/3 justify-around'>
                <div>
                    <Image alt={name} src={picture} className='mx-auto rounded-full w-auto' width={100} height={100} />
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
                <div className='flex gap-2 mt-5 flex-col'>
                    <button className='btn bg-base-100'>
                        <span className='far fa-bell fa-slab'></span>
                        Snooz 2 weeks
                    </button>
                    <button onClick={addTimeLine} className='btn bg-base-100'>
                        <i className='far fa-box-archive'></i>
                        Archive
                    </button>
                    <button className='btn bg-base-100'>
                        <i className='far fa-trash'></i>
                        Delete
                    </button>
                </div>
            </div>

            <div className='px-2'>
                <div className='px-2 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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
            </div>
        </div>
    );
};

export const Stats = ({ title, stat }) => {
    return (
        <div className='stats shadow bg-base-100'>
            <div className='stat overflow-hidden'>
                <div className={`${nunito.className} stat-value text-center text-2xl`}>{stat ?? 'N/A'}</div>
                <div className={`${nunito.className} text-lg text-center stat-title`}>{title}</div>
            </div>
        </div>
    );
};

export default Page;
