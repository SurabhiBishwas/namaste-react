import {RESTAURANT_CDN_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

export const RestaurantCard = ({restaurant}) => {
    const userData = useContext(UserContext);
    const {id, cloudinaryImageId, name, cuisines, avgRating, sla} = restaurant.info
    return (
        <Link to={'/restaurant/'+ id}>
            <div className='w-72 p-2 border-2 border-amber-500 rounded-md bg-gray-100 hover:bg-gray-200'>
                <img className='w-full rounded-lg h-48 object-cover' alt='res-logo' src={RESTAURANT_CDN_URL+cloudinaryImageId}/>
                <h3 className='text-lg font-semibold'>{name}</h3>
                <h4 className='text-sm text-gray-500'>{cuisines.join(', ')}</h4>
                <h4 className='text-sm text-gray-500'>{avgRating} stars</h4>
                <h4 className='text-sm text-gray-500'>{sla.deliveryTime} minutes</h4>
                <h4 className='text-sm text-gray-500'>{userData.name}</h4>
            </div>
        </Link>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute top-10 right-10 bg-black text-white p-2 rounded-md'>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
// export default RestaurantCard;