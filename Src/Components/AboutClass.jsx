import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const AboutClass=()=>{
//     return<div>
//         <UserClass name={"Shivam Ji"} location={"Kharar"}/>
//     </div>
// }
// export default AboutClass;

class AboutClass extends React.Component{
    constructor(){
        super()
      
        
    }
    componentDidMount(){
    console.log("Component Mounted ");
    
        
    }
    render(){   
        return  <div>
             <h1> About us classbased component</h1>  
             <UserClass name={"Shivam Ji"} location={"Kharar"}/>
            </div>
    }
}
export default AboutClass;