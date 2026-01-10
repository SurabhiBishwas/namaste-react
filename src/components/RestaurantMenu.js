import {useEffect, useState} from 'react';
import {restaurantMenu} from '../utils/mockData'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu(resId);
    }, []);

    const fetchMenu = async (resId) => {
        const apiRes = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8452145&lng=77.6601695&restaurantId='+resId+'&catalog_qa=undefined&submitAction=ENTER');
        // const data = await apiRes.json();
        setTimeout(() => {
            setResInfo(restaurantMenu);
        }, 1000)
    }

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