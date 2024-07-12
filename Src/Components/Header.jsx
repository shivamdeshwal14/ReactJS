import { useState } from "react";
import { LOGO_URL } from "../utils/constansts";
export const Header=()=>{
    // var btnName="Login"
    function onclick(){
         btnName ==="Login"
         ? setBtnName("Logout")
         : setBtnName("Login")
   
    }

    const [btnName,setBtnName]=useState("Logout");
    console.log("Header render");
    // whole header component rerendered after clicking on button
    
    return (
        <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
                    <h2 className="website-name">Foodferry</h2>
                </div>
                
                <div className="nav-items">
                    <ul>
                        
                        <li>Search</li>
                        <li>Offers</li>
                        <li>Help</li>
                        <li>Sign in</li>
                        <li>cart</li>
                        <button onClick={onclick} className="login-btn">{btnName}</button>
                    </ul>
                </div>

        </div>
    )
}
export default Header;