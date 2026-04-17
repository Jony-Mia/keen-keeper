import axios from "axios";
export const getFriends = async () => {
    const res = await fetch("http://localhost:3000/friends.json")
    let data = await res.json();
    return data;
}

// export const getFriends =  async () => {
//     const res = await axios("/friends.json")
//     return await res.data;
// }