"use client"
import { PieChart, Pie, Label, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useContext } from 'react';
import { TimeLineContextList } from '@/state/timeContext';

// const data = [
//     { name: 'Message', value: 3, fill: '#244d3f' },
//     { name: 'Text', value: 4, fill: '#7f37f5' },
//     { name: 'Video', value: 1, fill: '#37a163' },
// ];

const MyPie = () => {
    let { timeline } = useContext(TimeLineContextList)

    const data = [
             { name: 'Message', value: timeline.filter(msg=>msg.text==="Message").length , fill: '#244d3f' },
             { name: 'Call', value:  timeline.filter(txt=>txt.text==="Call").length , fill: '#7f37f5' },
             { name: 'Video', value:  timeline.filter(vdo=>vdo.text==="Video").length , fill: '#37a163' },
    ]
    console.log(timeline);
    return (
        <Pie data={data} dataKey="value" cornerRadius={"20"} spacing={"20"} nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
    )
};

export default function PieChartInGrid() {

    return (
        <div style={{ width: '40%' }} className='mx-auto mt-5'>
            <p className='font-bold text-4xl text-center'> Chart </p>
            <div >
                <PieChart
                    responsive
                    style={{
                        gridColumn: '1 / 3',
                        gridRow: '1 / 3',
                        aspectRatio: 1,
                    }}>
                    <MyPie />
                    <Label position="center" fill="#666">
                        Interaction
                    </Label>
                    <RechartsDevtools />
                    <Legend />
                </PieChart>
            </div>
        </div>
    )
}