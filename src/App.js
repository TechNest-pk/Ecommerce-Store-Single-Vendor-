import React, { Component } from 'react';
//React Router
import { withRouter } from "react-router-dom";
//Config
import { baseUrl } from './Config/api';
import firebase from './Config/Firebase';
//Axios
import axios from 'axios';

//Casecading Stylesheet
import './App.css';
//Routes
import Routes from './Routes/Routes';
//Components
import Navbar from './Components/Navbar';

class App extends Component {

    state = {
        userId: null,
        userEmail: null,
        userData: null,

        isLoading: true,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userId = firebase.auth().currentUser.uid;
                const email = firebase.auth().currentUser.email;
                this.setState({
                    userId: userId,
                    userEmail: email,
                    isLoading: false
                }, () => {
                    this.getUser(userId);
                });
            }
            else {
                console.log('User not Logged in');
                this.setState({
                    userId: null,
                    userEmail: null,
                    isLoading: false,
                });
            }
        });
    }

    getUser = userId => {
        console.log('chala')
        axios({
            url: `${baseUrl}/user/get-current-user`,
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
                <Routes userId={userId} userData={userData} />
            </React.Fragment >
        )
    }
}

export default withRouter(App);