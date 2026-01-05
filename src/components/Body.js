import {RestaurantCard} from './RestaurantCard';
import resList from '../utils/mockData';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer'

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(res => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        // const apiRes = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8452145&lng=77.6601695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const data = await apiRes.json();
        setTimeout(() => {
            setRestaurantsList(resList);
            setFilteredRestaurantsList(resList);
        }, 2000);
    }

    if(!restaurantsList?.length) {
        return Shimmer();
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button onClick={() => {
                        setFilteredRestaurantsList(restaurantsList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>
                <button className='filter-btn'
                    onClick={() => {
                        setFilteredRestaurantsList(restaurantsList.filter(res => res.info.avgRating>=4.5));
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {filteredRestaurantsList.map(res => <RestaurantCard key={res?.info?.id} restaurant={res} />)}
            </div>
        </div>
    )
}

export default Body;