export const getFriends = async () => {
    const res = await fetch("http://localhost:3000/friends.json",{
        cache:"no-store"
    })
    let data = await res.json();
    return data;
}
