export const getFriends = async () => {
    const res = await fetch("http://localhost:3000/friends.json");
    if(res.ok){
        const data= await res.json();
        return data
    }
}