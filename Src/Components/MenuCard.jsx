import { CDN_URL } from '../utils/constansts';
import './MenuCard.css'
const   MenuCard=({Items})=>{
  
    console.log(Items);
    
      
    return(

        <div className="menu-card">
            <div className="food-details">
                <p className="food-name-card" >{Items.card.info.name}</p>
                <p className='food-price-card'>rs {Items.card.info.price/100  ||Items.card.info.defaultPrice}</p>
                <p className='food-rating-card'>{Items.card.info.ratings.aggregatedRating.rating|| 3.5  }({Items.card.info.ratings.aggregatedRating.ratingCount||100 +"ratings"})</p>
                <p className='food-rating-cuisine'>{Items.card.info.description}</p>
            </div>
            <div className="food-image">
            <img className="menu-card-img" src={CDN_URL+Items.card.info.imageId} alt="Food Image" />
            </div>
        
        </div>
        
    )
}
export default MenuCard;