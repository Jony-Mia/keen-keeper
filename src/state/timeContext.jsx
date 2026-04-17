"use client";

import { createContext, useState } from "react";

export const TimeLineContextList = createContext([]);

// const localTime = JSON.parse(localStorage.getItem("timelines"))
const TimeContext = ({ children }) => {
    let [timeline, setTimeLine] = useState([]);
    const timeLineData = {
        timeline,
        setTimeLine
    }
    

    // localStorage.setItem("timelines", JSON.stringify(timeline)) || [];

    return (
        <TimeLineContextList.Provider value={timeLineData}>
            {children}
        </TimeLineContextList.Provider>
    )
}

export default TimeContext;