import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import { Corousel } from "./Corousel";
const Body=()=>{
useEffect(()=>{
fetchData();
},[]);

const fetchData= async()=>{
  const data= await fetch(
    " https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json=await data.json();
  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setListofRestro(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}



let [listofRestro,setListofRestro]=useState([]);

// it is a  array distructuring
// const arr=useState(resList);
// const[listofRestro,setListofRestro]=arr;
// const listofRestro=arr[0];
// const setListOfRestro=arr[1]
 return(
        <div className="body">
          <Corousel/>
            <button className="button-filter" 
            onClick={()=>{
              console.log(listofRestro);
              const filteredList=listofRestro.filter(
                        (res)=> res.card.card.info.avgRating>4
                    );
                  setListofRestro(filteredList)
            }}
          >Top rated Restro</button>
            <h2 className="heading2-top">Top restaurants in Mohali</h2>
            <div className="res-container">
           {
           listofRestro.map((restaurant,idx) =><RestaurantCard key={idx} resdata={restaurant}/>
           )}            
            </div>
            <Footer/>

        </div>
    )
}
export default Body;