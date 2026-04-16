"use client";

import { createContext, useState } from "react";

export const TimeLineContextList = createContext([]);

const TimeContext = ({ children }) => {
    let [timeline, setTimeLine] = useState([]);
    const timeLineData = {
        timeline,
        setTimeLine
    }

    return (
        <TimeLineContextList.Provider value={timeLineData}>
            {children}
        </TimeLineContextList.Provider>
    )
}

export default TimeContext;