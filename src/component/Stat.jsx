import { Nunito } from 'next/font/google';
import { getFriends } from '@/API/api';
const nunito = Nunito({ subsets: ['latin'], weight: "600" });
const Stat = async () => {
    let res = await getFriends();
    let overdue = res.filter(fr => fr.status == "overdue");
    let track = res.filter(fr => fr.status == "on-track");
    let almostDue = res.filter(fr => fr.status == "almost due");

    return (
        <div className=' mx-auto container grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 my-10 px-4 '>
            <Stats title={"Total"} stat={res.length} />
            <Stats title={"On Track"} stat={track.length} />
            <Stats title={"Need Attention"} stat={overdue.length} />
            <Stats title={"Interaction"} stat={almostDue.length} />
        </div>
    );
};

export const Stats = ({ title, stat }) => {
    return (
        <div className="stats shadow bg-base-100">
            <div className="stat overflow-hidden h-37.5 flex flex-col justify-center ">
                <div className={`${nunito.className} stat-value text-center `}>{stat}</div>
                <div className={` ${nunito.className} text-lg text-center stat-title`}>{title}</div>
            </div>
        </div>
    )
}

export default Stat;