import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import ContactUs from './components/Contact';
import Cart from './components/Cart';

function AppLayout() {
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {path: '/', element: <AppLayout/>, children: [
        {path: '/', element: <Body/>},
        {path: '/about-us', element: <AboutUs/>},
        {path: '/body', element: <Body/>},
        {path: '/contact-us', element: <ContactUs/>},
        {path: '/cart', element: <Cart/>}
    ]},
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={appRouter} />
);