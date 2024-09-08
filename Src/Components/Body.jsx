import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import { useEffect, useState } from "react";

import { Widget } from "./Widget";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{

  let[listofRestro,setListofRestro]=useState([]);
  let[widgetList,setWidgetList]=useState([]);
  const[searchText,setSearchText]=useState("");
  const[searchedData,setSearchData]=useState([]);

  
  

useEffect(()=>{

fetchData();
},[]);

const fetchData= async()=>{
  const data= await fetch(
    " https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json=await data.json();
    setListofRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setWidgetList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    // setSearchData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

 return listofRestro.length===0 ? <Shimmer/> :(
        <div className="body">
            {/* Widget Container */}
             <h2 className="heading2-top">What's on your mind?</h2>
              <div className="widget-container">
              {
              widgetList.map(widgets=> <Widget idx={widgets.id} widData={widgets}  />
                )}
              </div>
            {/* search functionality */}
         {/* search functionality add from Read Me file */}
         
            <h2 className="heading2-top">Top restaurants in Mohali</h2>
            <div className="res-container">
           {
                   
           listofRestro.map((restaurant,idx) =>    
              // taking us to the Restaurant Menu Page with restaurant ID
           <Link className="menu-link" to={"/restaurant/"+restaurant.info.id}> <RestaurantCard key={idx} resdata={restaurant}/></Link> 
           )}            
            </div>
            <Footer/>
        </div>
  )
}
export default Body;