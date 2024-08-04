import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Screen from '../sharedComp/Screen/Screen';
import ProtectedParent from './ProtectedParent';
import ProtectedRoutes from './ProtectedRoutes';
import UnProtected from './UnProtected';
import SingleProduct from '../sharedComp/Products/SingleProduct';
import Products from '../sharedComp/Products/Products';
import Home from '../sharedComp/Home/Home';
import Signup from '../components/Authentication/Signup';
import Login from '../components/Authentication/Login';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/User/Checkout';
import Success from '../sharedComp/Success/Success';


const Router = createBrowserRouter([
    {
        element: <ProtectedParent />,
        children: [
            {
                path: '/',
                element: <Screen />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: `/products`,
                        element: <Products />,
                    },
           
                    {
                        path: `/product/:productId`,
                        element: <SingleProduct />
                    },
                    {
                        path: "/cart",
                        element: <Cart />
                    },
                ]
            },
            {
                path: "/success",
                element: <Success />
            },

            {
                element: <UnProtected />,
                children: [
                    {
                        path: "/login",
                        element: <Login />
                    },
                    {
                        path: "/signup",
                        element: <Signup />
                    },
                   
                ]
            },
           
            {
                element: <ProtectedRoutes allowedRole={["user"]} />,
                children: [
                   
                    {
                        path: "/checkout",
                        element: <Checkout />
                    },
                ]
            },
            
        ]
    }
])

export default Router