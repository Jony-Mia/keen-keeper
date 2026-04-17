"use client";
import { TimeLineContextList } from '@/state/timeContext';
import React, { use, useContext } from 'react';

const Page = () => {
    const { timeline } = useContext(TimeLineContextList)
    if (timeline.length === 0) {
        return(
            <div className='h-screen flex max-h-[80vh] justify-center items-center'>
                 <p>There is no timeline added</p>
            </div>
        )
    }
    timeline.map(time => console.log(time))
    return (
        <div className='container mx-auto bg-base-200 p-5'>
            <h1 className='text-2xl font-bold text-center my-5'>Timeline</h1>
            {timeline.map((values, index) => {
                return (
                    <div key={index} className='flex items-center bg-base-100 gap-5 shadow p-4 rounded-3xl my-3'>
                        <p className={`${values.icon} text-2xl`}></p>
                        <div className=''>

                            <p className='font-bold text-lg'>{values.name}</p>
                            <p>{values.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Page;   