"use client";
import { TimeLineContextList } from '@/state/timeContext';
import React, { use, useContext } from 'react';

const Page = () => {
    const {timeline} = useContext(TimeLineContextList)
    if (timeline.length === 0) {
        return <p>There is no timeline added</p>
    }
   timeline.map(time=>console.log(time))
    return (
        <div>
            
        </div>
    );
};

export default Page;