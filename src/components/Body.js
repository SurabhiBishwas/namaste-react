import {RestaurantCard, withPromotedLabel} from './RestaurantCard';
import {useState, useEffect, useContext} from 'react';
import Shimmer from './Shimmer'
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    const userData = useContext(UserContext);
    const [user, setUser] = useState(userData);
    useEffect(res => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const apiRes = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8452145&lng=77.6601695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await apiRes.json();
        const resList = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resList);
        setRestaurantsList(resList);
        setFilteredRestaurantsList(resList);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus)
        return <h1>Please check your Internet connection !!!</h1>

    if(!restaurantsList?.length) {
        return Shimmer();
    }

    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <input type='text' className='w-96 p-2 border-2 border-amber-500 rounded-md' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button onClick={() => {
                        setFilteredRestaurantsList(restaurantsList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }} className='bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-blue-500'>Search</button>
                </div>
                <input value={user.name} className='w-96 p-2 border-2 border-amber-500 rounded-md' onChange={(e) => setUser({...user, name: e.target.value})}></input>
                <button className='bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-blue-500'
                    onClick={() => {
                        setFilteredRestaurantsList(restaurantsList.filter(res => res.info.avgRating>=4.5));
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='flex flex-wrap gap-4 justify-center bg-amber-100 p-4 rounded-lg'>
                {
                    filteredRestaurantsList.map(res => res?.info?.promoted
                        ? <PromotedRestaurantCard key={res?.info?.id} restaurant={res} />
                        : <RestaurantCard key={res?.info?.id} restaurant={res} />
                    )
                }
            </div>
        </div>
    )
}

export default Body;