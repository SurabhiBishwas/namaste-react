import {useSelector, useDispatch} from 'react-redux';
import { RESTAURANT_CDN_URL } from '../utils/constants';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className='p-4'>
            {cartItems.length === 0 ? (
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-2xl font-semibold'>Cart is empty</h1>
                </div>
            ) : (
            <>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold'>Cart</h1>
                    <button className='cursor-pointer relative -top-2.5 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600' onClick={() => dispatch(clearCart())}>CLEAR CART</button>
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    {cartItems.map((item) => {
                        const {id, name,finalPrice, imageId, price} = item.card.info;
                        return (
                            <div key={id} className='flex items-center justify-between border-b-2 border-gray-300 pb-4 gap-4'>
                                <img className='w-48 h-48 object-cover rounded-lg' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+imageId} alt={name} />
                                <h3 className='text-lg font-semibold'>{name}</h3>
                                <p className='text-sm text-gray-500'>₹ {(finalPrice || price)/100}</p>
                                <button className='cursor-pointer relative -top-2.5 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600' onClick={() => dispatch(removeItem(item))}>REMOVE</button>
                            </div>
                        )
                    })}
                </div>
            </>
            )}
        </div>
    )
}

export default Cart;