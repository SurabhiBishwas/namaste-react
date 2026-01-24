import { useDispatch } from 'react-redux';
import {RESTAURANT_CDN_URL} from '../utils/constants';
import { useState } from 'react';
import { addItem } from '../utils/cartSlice';

const RestaurantMenuCard = ({menu}) => {
    const {title, itemCards} = menu;
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div className={`border-b-2 border-gray-300 pb-4 bg-amber-100 rounded-lg p-4 w-full m-4`}>
            <div className='flex items-center justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='text-2xl font-semibold'>{title} ({itemCards.length})</h3>
                <span className='text-2xl cursor-pointer'>{isOpen ? '▲' : '▼'}</span>
            </div>
            <div className={`flex flex-col gap-4 ${isOpen ? 'block' : 'hidden'}`}>
                {itemCards.map((item) => {
                    const {id, itemAttribute, name, description, finalPrice, imageId, price} = item.card.info;
                    return (
                        <div key={id} className='flex items-center justify-between border-b-2 border-gray-300 pb-4 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-2xl'>{itemAttribute.vegClassifier === 'VEG' ? '🍃' : '🍗'}</span>
                                <h3 className='text-lg font-semibold'>{name}</h3>
                                <p className='text-sm text-gray-500'>₹ {(finalPrice || price)/100}</p>
                                {
                                    itemAttribute.ratings?.aggregatedRating?.ratingCountV2 && (
                                        <div className='flex items-center gap-2'>
                                            <span className='text-2xl text-yellow-500'>⭐ {itemAttribute.ratings.aggregatedRating.rating}</span>
                                            <span className='text-2xl text-gray-500'>({itemAttribute.ratings.aggregatedRating.ratingCountV2})</span>
                                        </div>
                                    )
                                }
                                <p className='text-sm text-gray-500'>{description}</p>
                            </div>
                            <div className='w-48 h-48 flex flex-col items-center justify-center'>
                                <img className='w-full h-full object-cover rounded-lg' src={RESTAURANT_CDN_URL+imageId} alt={name} />
                                <button className='cursor-pointer relative -top-2.5 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600' onClick={() => handleAddItem(item)}>
                                    ADD
                                    <span className='absolute top-0 right-0'>+</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RestaurantMenuCard;