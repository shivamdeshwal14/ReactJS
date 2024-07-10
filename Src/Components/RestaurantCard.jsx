import {CDN_URL} from "../utils/constansts";
const RestaurantCard=(props)=>{
    const {resdata}=props;
    console.log(resdata.info.cloudinaryImageId);
    
    return(
        <div className="res-card">
              <img className="res-logo" src={CDN_URL+resdata.info.cloudinaryImageId} alt="food image">
            </img>
            <h4 className="res-details">{resdata.info.name}</h4>
            <div className="res-card-rating">
            <h4   className="res-rating">{resdata.info.avgRating} star</h4>
            <h4 className="res-rating">          .{resdata.info.sla.deliveryTime} minutes</h4>
                  </div>
            <p className="res-details"> {resdata.info.costForTwo} </p>
            <p className="res-details">{resdata.info.cuisines.join(",")}</p>
           
           
            
        </div>
           )
}
export default RestaurantCard