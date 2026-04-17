"use client";
import { TimeLineContextList } from '@/state/timeContext';
import React, { useState, use, useContext, useEffect, Activity } from 'react';

const Page = () => {
    let [timeStatus, setTimeStatus] = useState(null);
    let [visibility, setVisibility] = useState(true);
    let [visibility2, setVisibility2] = useState(true);

    const { timeline } = useContext(TimeLineContextList)
    if (timeline.length === 0) {
        return (
            <div className='h-screen flex max-h-[80vh] justify-center items-center'>
                <p>There is no timeline added</p>
            </div>
        )
    }
    console.log(timeStatus);

    useEffect(() => {
        if (timeStatus === null) {

            setTimeStatus("Filter Timeline")
            setVisibility(true)

        } else if (timeStatus === "Message") {
            setTimeStatus("Message")

            setVisibility(false)
            setVisibility2(true)

        } else if (timeStatus === "Video") {
            setTimeStatus("Video")

            setVisibility(false)
            setVisibility2(true)

        } else if (timeStatus === "Call") {
            setTimeStatus("Call")

            setVisibility(false)
            setVisibility2(true)
        }
    }, [timeStatus])


    const filterTimeline = timeline.filter(time => time.text === timeStatus)
    const listFilter = [...new Map(timeline.map(item => [item.text, item])).values()];

    console.log(listFilter);

    return (
        <div className='container mx-auto bg-base-200 p-5'>

            <h1 className='text-2xl font-bold text-center my-5'>Timeline</h1>
            <div className="dropdown">
                <button className="btn bg-white m-1">
                    <span> {timeStatus} </span>
                    <span className='fa fa-angle-down'></span>
                </button>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {
                        listFilter.map((values, index) => {
                            return (
                                <li key={index} onClick={() => setTimeStatus(values.text)}><a>{values.text}</a></li>
                            )
                        })

                    }
                </ul>
            </div>


            {visibility && <div >
                {
                    timeline.map((values, index) => {
                        return (
                            <div key={index} className='flex items-center bg-base-100 gap-5 shadow p-4 rounded-3xl my-3'>
                                <p className={`${values.icon} text-2xl`}></p>
                                <div className=''>

                                    <p className='font-bold text-lg'>{values.name}</p>
                                    <p>{values.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>}
            {visibility2 &&
                <div>
                    {
                        filterTimeline.map((values, index) => {
                            return (
                                <div key={index} className='flex items-center bg-base-100 gap-5 shadow p-4 rounded-3xl my-3'>
                                    <p className={`${values.icon} text-2xl`}></p>
                                    <div className=''>

                                        <p className='font-bold text-lg'>{values.name}</p>
                                        <p>{values.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Page;   