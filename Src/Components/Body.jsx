import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body=()=>{

let [listofRestro,setListofRestro]=useState( resList)
// it is a  array distructuring
// const arr=useState(resList);
// const[listofRestro,setListofRestro]=arr;
// const listofRestro=arr[0];
// const setListOfRestro=arr[1]
 return(
        <div className="body">
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
           listofRestro.map((restaurant) =><RestaurantCard key={restaurant.card.card.info.id} resdata={restaurant}/>

           )}            
            </div>
            <Footer/>

        </div>
    )
}
export default Body;