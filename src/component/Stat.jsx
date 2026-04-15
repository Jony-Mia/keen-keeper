import { Nunito } from 'next/font/google';
import { getFriends } from '@/API/api';
const nunito = Nunito({ subsets: ['latin'], weight: "600" });
const Stat = async () => {
    let res = await getFriends();
    let overdue = res.filter(fr => fr.status == "overdue");
    let track = res.filter(fr => fr.status == "on-track");
    let almostDue = res.filter(fr => fr.status == "almost due");

    return (
        <div className=' mx-auto container grid  md:grid-cols-2 lg:grid-cols-4 gap-10 my-10'>
            <Stats title={"Total"} stat={res.length} />
            <Stats title={"On Track"} stat={track.length} />
            <Stats title={"Need Attention"} stat={overdue.length} />
            <Stats title={"Interaction"} stat={almostDue.length} />
        </div>
    );
};

export const Stats = ({ title, stat }) => {
    return (
        <div className="stats shadow">
            <div className="stat">
                <div className={`${nunito.className} stat-value text-center `}>{stat}</div>
                <div className={` ${nunito.className} text-lg text-center stat-title`}>{title}</div>
            </div>
        </div>
    )
}

export default Stat;