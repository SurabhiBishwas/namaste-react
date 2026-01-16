import {LOGO_URL} from '../utils/constants';
import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserDataContext from '../utils/UserDataContext';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const onlineStatus = useOnlineStatus();
    const {name} = useContext(UserDataContext);

    return (
        <div className='flex justify-between items-center p-2 shadow-lg bg-amber-500'>
            <div className='w-[75px]'>
                <img className='w-full rounded-lg' src={LOGO_URL} />
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center gap-4 text-lg font-semibold'>
                    <li>{onlineStatus ? '🟢' : '🔴' }</li>
                    <Link to='/' className='text-white hover:text-amber-200'>Home</Link>
                    <Link to="/about-us" className='text-white hover:text-amber-200'>About Us</Link>
                    <Link to="/contact-us" className='text-white hover:text-amber-200'>Contact Us</Link>
                    <Link to="/cart" className='text-white hover:text-amber-200'>Cart</Link>
                    <Link to="/grocery" className='text-white hover:text-amber-200'>Grocery</Link>
                    <li>{name}</li>
                    <button className='text-white cursor-pointer border-2 border-white rounded-md px-2 py-1 hover:bg-amber-200 hover:text-white' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;