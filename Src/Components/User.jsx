import { useEffect, useState } from "react";

const User=({name,location})=>{
    console.log(name,location); 
    const[count1]=useState(0);
    const [count2]=useState(1);
   
    useEffect(()=>{
        console.log("UseEffect Called");
        
        // Api calls inside use Effects because  loads UI->API->fill data (fast Loading) 
    getUserInfo();
    },[])
    async function getUserInfo(){
        const data=await fetch(" https://api.github.com/users/shivamdeshwal14");
        console.log(data.json());
        
    }
    return(
        <div className="aboutus-user-div">
            <h1>{count1}</h1>
            <h1>{count2}</h1>  
            <h2>Name:{name}</h2>
            <h2>City: {location}</h2>
            <h2>Email: shivam@gmail.com</h2>
        </div>
    )
}
export default User;