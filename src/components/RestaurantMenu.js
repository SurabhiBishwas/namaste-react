import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantMenuCard from './RestaurantMenuCard';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    return resInfo?.length===0 ? <Shimmer/> : (
        <div className='flex flex-col gap-4 p-4'>
            {resInfo?.map(({card}) => (
                <RestaurantMenuCard key={card.card.categoryId} menu={card.card} />
            ))}
        </div>
    );
};

export default RestaurantMenu;