import React  from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("user constructed");   
        this.state={
            userInfo:{
                name:"dummy",
                location:"chandigarh"
            }
        }
    }
    // fo fetching data in Class Based Component 
    // we make component Did Mount as async
   async componentDidMount(){  
    console.log("User comp mounted");
    
    const data=await fetch(" https://api.github.com/users/shivamdeshwal14");
    const jsond=await data.json();
    console.log(jsond);
    this.setState({
        userInfo:jsond
    })
    }
  render(){
        const {name,location}=this.props;    
            
        return(
            <div className="aboutus-user-div">
               
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>City: {this.state.userInfo.location}</h2>
                <h2>UserName:{this.state.userInfo.login}</h2>
            </div>
        );
    }

}
export default UserClass