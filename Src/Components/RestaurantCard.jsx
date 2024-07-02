import {CDN_URL} from "../utils/constansts";
const RestaurantCard=(props)=>{
    const {resdata}=props;
   
    return(
        <div className="res-card">
              <img className="res-logo" src={CDN_URL+resdata.card.card.info.cloudinaryImageId} alt="food image">
            </img>
            <h4 className="res-details">{resdata.card.card.info.name}</h4>
            <div className="res-card-rating">
            <h4   className="res-rating">{resdata.card.card.info.avgRating} star</h4>
            <h4 className="res-rating">          .{resdata.card.card.info.sla.deliveryTime} minutes</h4>
                  </div>
            <p className="res-details"> {resdata.card.card.info.costForTwo} </p>
            <p className="res-details">{resdata.card.card.info.cuisines.join(",")}</p>
           
           
            
        </div>
           )
}
export default RestaurantCard