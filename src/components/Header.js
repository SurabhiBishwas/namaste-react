import {LOGO_URL} from '../utils/constants';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const onlineStatus = useOnlineStatus();

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>{onlineStatus ? '🟢' : '🔴' }</li>
                    <Link to='/'>Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/grocery">Grocery</Link>
                    <button className='login-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;