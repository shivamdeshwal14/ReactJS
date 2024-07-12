import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import { useEffect, useState } from "react";

import { Widget } from "./Widget";
import Shimmer from "./Shimmer";
const Body=()=>{
useEffect(()=>{
fetchData();
},[]);

const fetchData= async()=>{
  const data= await fetch(
    " https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json=await data.json();
  // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  // console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
  setListofRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setWidgetList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  setSearchData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }



let [listofRestro,setListofRestro]=useState([]);
let[widgetList,setWidgetList]=useState([]);
const [searchText,setSearchText]=useState("");
const[searchedData,setSearchData]=useState([]);






 return listofRestro.length===0 ? <Shimmer/> :(
        <div className="body">
             <h2 className="heading2-top">What's on your mind?</h2>
          <div className="widget-container">
          
        {
          widgetList.map(widgets=> <Widget idx={widgets.id} widData={widgets}  />
           
        )}
        </div>
        <div className="search">
          <input 
          className="search-box"
          type="text" 
          value={searchText} 
          onChange={(e)=>{
          setSearchText(e.target.value)
          }}  />
          <button className="search-btn" onClick={()=>{
            console.log(searchText);
            let filtered=listofRestro.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              // setListofRestro(filtered);
              setSearchData(filtered);
             


          }}>Search </button>
             <button className="button-filter" 
            onClick={()=>{
              console.log(listofRestro);
              const filteredList=listofRestro.filter(
                        (res)=> res.info.avgRating>4.5
                    );
                  setListofRestro(filteredList)
            }}>Top rated Restro</button>
        </div>
          
            <h2 className="heading2-top">Top restaurants in Mohali</h2>
            <div className="res-container">
           {
           searchedData.map((restaurant,idx) =><RestaurantCard key={idx} resdata={restaurant}/>
           )}            
            </div>
            <Footer/>
        </div>
  )
}
export default Body;