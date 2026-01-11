import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    return resInfo?.length===0 ? <Shimmer/> : (
        resInfo.map(res => {
            const {id, isVeg, name, defaultPrice, description, ratings} = res.card.info;
            return (
                <div className="menu" key={id}>
                    <span>{isVeg ? '🟢' : '🔴'}</span>
                    <h5>{name}</h5>
                    <h6>₹ {defaultPrice/100}</h6>
                    <p>{ratings?.aggregatedRating?.rating} ({ratings?.aggregatedRating?.ratingCountV2})</p>
                    <h3>{description}</h3>
                </div>
            );
        })
    )
}

export default RestaurantMenu;