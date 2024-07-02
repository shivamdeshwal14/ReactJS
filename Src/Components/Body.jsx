import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer";
import resList from "../utils/mockdata";

const Body=()=>{
    return(
        <div className="body">
              <h2 className="heading2-top">Top restaurants in Mohali</h2>
            <div className="res-container">
           {
           resList.map(restaurant =><RestaurantCard key={restaurant.card.card.info.id} resdata={restaurant}/>)
              }            
            </div>
            <Footer/>

        </div>
    )
}
export default Body;