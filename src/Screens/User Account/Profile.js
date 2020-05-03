import React from 'react';

// React Router
import { Link } from 'react-router-dom';

//Axios
import axios from 'axios';

//Config
import firebase from '../../Config/Firebase';

//Material UI
import { Container, Grid, Card, Typography, Button } from '@material-ui/core';

//Components
import NavigationList from './Components/Navs';
import MyProfile from './Components/MyAccount';
import EditProfile from './Components/EditProfile.js';

const style = {
    profileNavHeading: {
        listStyle: 'none',
        textDecoration: 'none',
        color: '#008081',
        fontSize: '21px',
        marginBottom: '20px',
    },
    profileNav: {
        listStyle: 'none',
        textDecoration: 'none',
        color: '#474747',
        fontSize: '17px',
        margin: '5px',
        cursor: 'pointer'
    }
}


class App extends React.Component {

    state = {
        showProfile: true,
        showEditProfile: false,
        data: {},
    }

    componentDidMount() {

        const userID = this.props.match.params.userId;

        if (userID) {
            console.log(userID, 'if chal raha hai')
            axios(`http://localhost:8000/user/get-user/${userID}`)
                .then(response => {
                    this.setState({
                        data: response.data.data,
                    }, () => {
                        console.log(this.state.data)
                    })
                })
        }
        else {
            console.log(userID, ' else chal raha hai')
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    const userID = firebase.auth().currentUser.uid;
                    console.log(userID, 'chal raha hai');

                    axios({
                        url: 'http://localhost:8000/user/get-current-user',
                        method: "POST",
                        data: { userID: userID },
                    }).then(response => {
                        this.setState({
                            data: response.data.data,
                            // enableEditProfile: true,
                        }, () => {
                            console.log('kuch mila hai', this.state.data)
                        })
                    }).catch(err => {
                        //handle error
                        console.log(err);
                    });
                }
                else {
                    // User not logged in.
                }
            });
        }

        // const windowLocation = window.location.pathname.slice(7, 22);

        if (window.location.pathname === '/my-orders') {
            this.renderMyOrders();
        }
        else if (window.location.pathname === '/my-orders') {
            this.renderMyProfile();
        }
    }

    renderProfileNavs = () => {

        return (
            <div>
                <ul>
                    <li style={style.profileNavHeading}><Link to='/user' style={style.profileNavHeading}>Manage My Account</Link>
                        <ul>
                            <li style={style.profileNav}><span onClick={this.renderMyProfile}>My Profile</span></li>
                            <li style={style.profileNav}><span onClick={this.renderEditProfile}>Edit Profile</span></li>
                            {/* <li style={style.profileNav}><span>My Cancellation  </span></li> */}
                        </ul>
                    </li>
                    <li style={style.profileNavHeading}><Link to='/my-orders' style={style.profileNavHeading}>My Orders</Link></li>
                    {/* <li style={style.profileNavHeading}><span>My Reviews</span></li> */}
                    <li style={style.profileNavHeading}><span>Help</span></li>
                </ul>
            </div>
        )
    }

    renderMyProfile = () => {

        this.setState({
            showEditProfile: false,
            showOrders: false,
            showProfile: true,
        })
    }

    renderEditProfile = () => {

        this.setState({
            showEditProfile: true,
            showOrders: false,
            showProfile: false,
        })
    }

    render() {

        const { showProfile, showEditProfile, data } = this.state;
        console.log(data.fileImagePath);

        return (

            <React.Fragment>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>

                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <NavigationList renderProfile={this.renderMyProfile} />
                        </Grid>

                        {
                            showProfile &&
                            <Grid item lg={9} md={9} sm={6} xs={12}>
                                <MyProfile user={data} renderEditProfile={this.renderEditProfile} />
                            </Grid>
                        }

                        {
                            showEditProfile &&
                            <Grid item lg={9} md={9} sm={6} xs={12}>
                                <EditProfile user={data} />
                            </Grid>
                        }

                    </Grid>
                    {/* <img src={`http://localhost:8000/${data.fileImagePath}`} /> */}
                </Container>

            </React.Fragment>
        )
    }
}

export default App;