import React, { Component } from 'react';

//React Router
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

//Casecading Stylesheet
import './App.css';

//Screens
import LandingPage from './Screens/LandingPage'
import Login from './Screens/Login';
import Registeration from './Screens/Registeration';
import ProductDetails from './Screens/ProductDetails';
import UserAccount from './Screens/User Account/Profile';

//Components
import Navbar from './Components/Navbar';
import CategoriesDrawer from './Components/CategoriesDrawer';

class App extends Component {

    render() {

        return (
            <React.Fragment>
                <Navbar />
                <div style={{ height: 130 }} />
                <Switch>
                <Route path="/" exact render={props => (<LandingPage {...props} />)} />
                <Route path="/login" exact render={props => (<Login {...props} />)} />
                <Route path="/create-account" exact render={props => (<Registeration {...props} />)} />
                <Route path="/user/:path" exact render={props => (<UserAccount {...props} />)} />
                <Route path="/user/:path/:userId" exact render={props => (<UserAccount {...props} />)} />
                <Route path="/categories" exact render={props => (<CategoriesDrawer {...props} />)} />
                <Route path="/product" exact render={props => (<ProductDetails {...props} />)} />
                </Switch>
            </React.Fragment >
        )
    }
}

export default withRouter(App);