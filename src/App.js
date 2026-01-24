import React, {lazy, useContext, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import ContactUs from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery'
import UserDataContext from './utils/UserDataContext';
import { Provider } from 'react-redux'
import appStore from './utils/appStore';

const Grocery = lazy(() => import('./components/Grocery'));

function AppLayout() {
    const data = useContext(UserDataContext);
    const [user, setUser] = useState(data);

    // useEffect(() => {
    //     setUser({name: 'John Doe'});
    // }, []);

    return (
        <Provider store={appStore}>
            <UserDataContext.Provider value={{name: user.name, setUser}}>
                <div className='app'>
                    <Header/>
                    <Outlet/>
                </div>
            </UserDataContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {path: '/', element: <AppLayout/>, children: [
        {path: '/', element: <Body/>},
        {path: '/about-us', element: <AboutUs/>},
        {path: '/body', element: <Body/>},
        {path: '/contact-us', element: <ContactUs/>},
        {path: '/cart', element: <Cart/>},
        {path: '/restaurant/:resId', element: <RestaurantMenu/>},
        {path: '/grocery', element: <Grocery/>}
    ]},
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={appRouter} />
);