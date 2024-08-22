import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constansts";
import { Link } from "react-router-dom";
export const Header=()=>{
    // var btnName="Login"
    function onclick(){
         btnName ==="Login"
         ? setBtnName("Logout")
         : setBtnName("Login")
   
    }

    const [btnName,setBtnName]=useState("Logout");
   
    // whole header component rerendered after clicking on button
    useEffect(()=>{
        // console.log("UseEffect Called");
    },[btnName])
    return (
        <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}/>
                    <h2 className="website-name">Foodferry</h2>
                </div>
                
                <div className="nav-items">
                    <ul>
                        
                        <li ><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link  to="/">Home</Link></li>
                        <li>Sign in</li>
                        <li>cart</li>
                        <button onClick={onclick} className="login-btn">{btnName}</button>
                    </ul>
                </div>

        </div>
    )
}
export default Header;