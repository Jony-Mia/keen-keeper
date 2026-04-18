export const getFriends = async () => {
    const res = await fetch("https://keen-keeper-beryl.vercel.app/friends.json",{
        cache:"no-store"
    })
    let data = await res.json();
    return data;
}
