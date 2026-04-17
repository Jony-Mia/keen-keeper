"use client";

import { createContext, useState } from "react";

export const ChartContextData = createContext([]);

const TimeContext = ({ children }) => {
    let [chartData, setChartData] = useState([]);
    const chartDataList = {
        chartData,
        setChartData
    }

    return (
        <ChartContextData.Provider value={chartDataList}>
            {children}
        </ChartContextData.Provider>
    )
}

export default TimeContext;