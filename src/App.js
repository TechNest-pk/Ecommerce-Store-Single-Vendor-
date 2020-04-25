import React from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Casecading Stylesheet
import './App.css';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <h3>Ecommerce Store</h3>
                </div>
            </div>
        )
    }
}

export default withRouter(App);