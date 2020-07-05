import React from 'react';
//React Router
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

//Screens
import LandingPage from '../Screens/LandingPage'
import Login from '../Screens/Login';
import Registeration from '../Screens/Registeration';
import ProductDetails from '../Screens/Product Details/Index';
import UserAccount from '../Screens/User Account/Profile';
import Cart from '../Screens/Cart';

//Components
import CategoriesDrawer from '../Components/CategoriesDrawer';

const routes = props => {

    const { userId, userData } = props;

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={props => (
                    <LandingPage {...props} />
                )}
            />
            <Route
                exact
                path="/login"
                render={props => (
                    <Login {...props} />
                )}
            />
            <Route
                exact
                path="/create-account"
                render={props => (
                    <Registeration {...props} />
                )}
            />
            <Route
                exact
                path="/user/:path"
                render={props => (
                    <UserAccount {...props} />
                )}
            />
            <Route
                exact
                path="/user/:path/:userId"
                render={props => (
                    <UserAccount {...props} />
                )}
            />
            <Route
                exact
                path="/categories"
                render={props => (
                    <CategoriesDrawer {...props} />
                )}
            />
            <Route
                exact
                path="/product"
                render={props => (
                    <ProductDetails {...props}
                        firebaseUserId={userId}
                        userData={userData}
                    />
                )}
            />
            <Route
                exact
                path="/product/:prodId"
                render={props => (
                    <ProductDetails {...props}
                        firebaseUserId={userId}
                        userData={userData}
                    />
                )}
            />
            <Route
                exact
                path="/cart"
                render={props => (
                    <Cart {...props} />
                )}
            />
        </Switch>
    )
}

export default withRouter(routes); 