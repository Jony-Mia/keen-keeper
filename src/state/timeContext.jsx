"use client";

import { createContext, useState } from "react";

export const TimeLineContextList = createContext([]);

const TimeContext = ({ children }) => {
    let [timeline, setTimeLine] = useState([]);
    const timeLineData = {
        timeline,
        setTimeLine
    }
    console.log(timeline);
    return (
        <TimeLineContextList.Provider value={timeLineData}>
            {children}
        </TimeLineContextList.Provider>
    )
}

{/**
 * export const WishList = createContext([]);

const WishContext = ({children}) => {
    let [wish, setWish] = useState([])
    const wishData = {
        wish,
        setWish
    }
       console.log(wish);
    return (
        <WishList.Provider value={wishData}>
            {children}
        </WishList.Provider>
    );
};


export default WishContext;
 */};

export default TimeContext;