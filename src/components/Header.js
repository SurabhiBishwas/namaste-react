import {LOGO_URL} from '../utils/constants';
import {useState} from 'react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;