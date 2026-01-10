import {RESTAURANT_CDN_URL} from '../utils/constants';
import { Link } from 'react-router-dom';

export const RestaurantCard = ({restaurant}) => {
    const {id, cloudinaryImageId, name, cuisines, avgRating, sla} = restaurant.info
    return (
        <Link to={'/restaurant/'+ id}>
            <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
                <img className='res-logo' alt='res-logo' src={RESTAURANT_CDN_URL+cloudinaryImageId}/>
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </Link>
    )
}

// export default RestaurantCard;