import {useState, useEffect} from 'react';
import { restaurantMenu } from './mockData';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);
    useEffect(() => {
        fetchApi();
    }, [])

    async function fetchApi() {
        const apiRes = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8452145&lng=77.6601695&restaurantId='+resId+'&catalog_qa=undefined&submitAction=ENTER');
        // const data = await apiRes.json();
        setTimeout(() => {
            setResInfo(restaurantMenu);
        }, 1000)
    }

    return resInfo;
}

export default useRestaurantMenu;