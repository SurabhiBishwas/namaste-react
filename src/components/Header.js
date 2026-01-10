import {LOGO_URL} from '../utils/constants';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/cart">Cart</Link>
                    <button className='login-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;