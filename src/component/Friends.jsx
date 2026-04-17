import { getFriends } from '@/API/api';
import { Nunito } from 'next/font/google';

import Image from 'next/image';
import Link from 'next/link';

const nunito = Nunito({ weight: "600" });
const Friends = async () => {
    let res = await getFriends();

    return (
        <>
            <h1 className={` ${nunito.className} text-4xl font-bold text-center my-5`}>Your Friends</h1>
            <div className='grid md:grid-cols-4 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-10 container m-auto'>
                {
                    res.map(fr => {
                        return <Card key={fr.id} id={fr.id} name={fr.name} image={fr.picture} status={fr.status} contact={fr.days_since_contact} tags={fr.tags} />;
                    })
                }
            </div></>
    );
};

export const Card = ({ name, id, image, status, tags, contact }) => {
    let badgeColor = "btn-success";
    if (status == "overdue") {
        badgeColor = "btn-error ";
    }
    else if (status == "almost due") {
        badgeColor = "btn-warning ";
    }
    // else badgeColor = "badge-success badge-soft";

    return (
        <Link href={`/friends/${id}`}>

            <div className="card bg-base-100 text-center py-2.5  shadow-sm">
                <Image alt={name} src={image} className='mx-auto rounded-full w-auto' width={100} height={100} />
                <div className="card-body">
                    <h2 className="card-title  text-sm block">{name}</h2>
                    <p>{contact}d ago</p>
                    <div className='flex justify-center items-center'>
                        <button className={` ${badgeColor} rounded-full btn btn-sm mx-auto inline-block capitalize`}>{status}</button>
                    </div>
                    <div>
                        <div className="badge badge-success badge-soft  mx-2">{tags[0]}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Friends;