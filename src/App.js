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

//Components
import Navbar from './Components/Navbar';

class App extends Component {

    render() {

        return (
            <React.Fragment>
                <Switch>
                    <Route path="/login" exact render={props => (<Login {...props} />)} />
                    <Route path="/create-account" exact render={props => (<Registeration {...props} />)} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(App);