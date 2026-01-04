import {RestaurantCard} from './RestaurantCard';
import resList from '../utils/mockData';
import {useState} from 'react';

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState(resList);

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'
                    onClick={() => {
                        setRestaurantsList(restaurantsList.filter(res => res.info.avgRating>=4.5));
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {restaurantsList.map(res => <RestaurantCard key={res?.info?.id} restaurant={res} />)}
            </div>
        </div>
    )
}

export default Body;