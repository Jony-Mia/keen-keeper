// export const getFriends =  () => {
//     const res =  fetch("/friends.json").then(res=>res.json);
//     return res;
// }


export const getFriends =  async () => {
    const res = await fetch("http://localhost:3000/friends.json")
    let  data= await res.json();
    return data;
}
