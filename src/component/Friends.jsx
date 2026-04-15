import { getFriends } from '@/API/api';
import Image from 'next/image';
import Link from 'next/link';

const Friends = async () => {
    let res = await getFriends();

    return (
        <div className='grid md:grid-cols-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-6 gap-10 container m-auto'>
            {
                res.map(fr => {
                    return <Card key={fr.id} id={fr.id} name={fr.name} image={fr.picture} contact={fr.days_since_contact} tags={fr.tags} />;
                })
            }
        </div>
    );
};

export const Card = ({ name, id, image, tags, contact }) => {
    return (
        <div className="card bg-base-100 text-center shadow-sm">
            <Image alt={name} src={image} className='mx-auto rounded-full w-auto' width={100} height={100} />
            <div className="card-body">
                <h2 className="card-title block">{name}</h2>
                <p>{contact}d ago</p>
                <div>
                    {tags.map((tag, index) => {
                            return <div key={index} className="badge badge-success badge-soft  mx-2">{tag}</div>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Friends;