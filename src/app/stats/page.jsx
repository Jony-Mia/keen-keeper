"use client"
import { PieChart, Pie, Label, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
    { name: 'Message', value: 3, fill: '#244d3f' },
    { name: 'Text', value: 4, fill: '#7f37f5' },
    { name: 'Video', value: 1, fill: '#37a163' },
    //   { name: 'Group D', value: 200, fill: '#FF8042' },
];

// #endregion
const MyPie = () => (
    <Pie data={data} dataKey="value" cornerRadius={"20"} spacing={"20"} nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

/**
 * This example shows how to use the `responsive` prop on charts inside a CSS grid container.
 * The `responsive` prop makes the chart automatically resize to fit its parent container.
 * By combining it with grid properties, you can create complex and responsive chart layouts.
 */
export default function PieChartInGrid() {
    return (
        <div style={{ width: '40%' }} className='mx-auto'>
            <p>
                The <code>responsive</code> prop works well with CSS grid. The charts below are in a grid container. Resize the
                window to see how they behave. Each chart is a grid item.
            </p>
            <div >
                <PieChart
                    responsive
                    style={{
                        gridColumn: '1 / 3',
                        gridRow: '1 / 3',

                        // maxWidth: '100%',
                        // maxHeight: '100%',
                        aspectRatio: 1,
                    }}

                >
                    <MyPie />
                    <Label position="center" fill="#666">
                        2x2 cell
                    </Label>
                    <RechartsDevtools />
                    <Legend />
                </PieChart>

            </div>
        </div>
    )
}