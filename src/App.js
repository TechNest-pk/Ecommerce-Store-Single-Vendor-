import React, { Component } from 'react';

//React Router
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";

//Config
import { serverUrl } from './Config/Backend';
import firebase from './Config/Firebase';

//Axios
import axios from 'axios';

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

    state = {
        userId: null,
        userEmail: null,
        userData: {},
    }

    componentDidMount() {
        this.checkUser();
    }

    checkUser = () => {

        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                const userId = firebase.auth().currentUser.uid;
                const email = firebase.auth().currentUser.email;
                this.setState({
                    userId: userId,
                    userEmail: email,
                }, () => {
                    this.getUser(userId);
                });
            }
            else {
                this.setState({
                    user: null,
                    userEmail: null,
                });
                console.log('User not Logged in');
            }
        });
    }

    getUser = (userId) => {
        axios({
            url: `${serverUrl}user/get-current-user`,
            method: "POST",
            data: { userId: userId }
        })
            .then(response => {
                this.setState({
                    userData: response.data.data,
                })
            })
            .catch(err => {
                //handle error
                console.log(err);
            });
    }

    render() {

        const { userId, userData } = this.state;

        return (
            <React.Fragment>
                <Navbar user={userId} userData={userData} />
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