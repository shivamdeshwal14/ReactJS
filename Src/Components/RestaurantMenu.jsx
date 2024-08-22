import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constansts";
const RestaurantMenu=()=>{

// contains details of restaurants 
const[resDetails,setResDetails]=useState(null);

// containsdetail about menu item to call menu card

const[menuItems,setMenuItems]=useState([]);
// it will return the param i.e the resId defined in app.js\

const {resId}=useParams();
console.log(resId);

useEffect(()=>{
    fetchData();
},[]);
const fetchData=async()=>{
const data=await fetch(
        MENU_API+
        resId+
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json=await data.json();
    // set the restauratnt-details from data into useState
    setResDetails(json.data.cards[2].card.card.info);

    // set the Menu-Items into useState to call MenuCard Component
    setMenuItems(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
}   
return resDetails==null ? <Shimmer/> :(   

        <div className="main-div-menu">
            <p className="headings">{resDetails.name}</p>
            <div className="order-type-div-menu">
                <button className="online-btn-menu">Order Online</button>
                <button className="dine-btn-menu">Dine Out</button>
            </div>
            {/* div for details */}
            <div className="div-resdetails-menu">
               <p className="resdetails-rating">{resDetails.avgRating}(10k+ ratings). {resDetails.costForTwoMessage}</p>
               <p className="resdetails-cuisine"> {resDetails.cuisines[0]},{resDetails.cuisines[1]}</p>
               <p className="resdetails-outlets"><b>Outlets</b> {resDetails.areaName}</p>
               <p><b>{resDetails.sla.minDeliveryTime}-{resDetails.sla.maxDeliveryTime} mins  </b>  </p>
               <p>{resDetails.feeDetails.message}</p>
            </div>
            <p className="headings">Deals for you</p>
            <div className="div-deals-menu">            
                <div className="offer-card-menu">
                    <p>items at 159</p>
                </div>
                <div className="offer-card-menu">
                    <p>items at 159</p>
                </div>
                <div className="offer-card-menu">
                    <p>items at 159</p>
                </div>           
            </div>
            <div className="div-search-menu">              
                <input className="search-input-menu" placeholder="Search for dishes" type="text" />
                <button className="search-button-menu">Search</button>
            </div>
            <div className="menu-topPickup">
                {/* <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/> */}
            </div>
            <p className="headings">Recommended</p>
            <div>
                {
                menuItems.map((val,key)=>{               
                    return(                    
                       <MenuCard key={val.card.info.id} Items={val}/>

                    )
                    })
                }
            </div>
        </div>
    )
}
export default RestaurantMenu;