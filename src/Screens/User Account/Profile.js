import React from 'react';

//Axios
import axios from 'axios';

//Config
import firebase from '../../Config/Firebase';

//Material UI
import { Container, Grid } from '@material-ui/core';

//Components
import NavigationList from './Components/Navs';
import UserDp from './Components/UserDp';
import MyProfile from './Components/MyProfile';
import EditProfile from './Components/EditProfile.js';
import MyOrders from './Components/MyOrders';

class App extends React.Component {

    state = {
        showProfile: true,
        showEditProfile: false,
        showChangePassword: false,
        showOrders: false,
        showReviews: false,
        path: 'profile',
        data: {},
    }

    componentDidMount() {

        const userID = this.props.match.params.userId;
       
        //Check for url path
        this.checkPath();

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

    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            this.checkPath();
        }
    }

    checkPath = () => {

        const path = this.props.match.params.path;

        if (path === 'profile') {
            this.setState({
                showProfile: true,
                showEditProfile: false,
                showChangePassword: false,
                showOrders: false,
                showReviews: false,
                path: path
            });
        }
        else if (path === 'change-password') {
            this.setState({
                showChangePassword: true,
                showEditProfile: false,
                showProfile: false,
                showOrders: false,
                showReviews: false,
                path: path
            });
        }
        else if (path === 'orders') {
            this.setState({
                showOrders: true,
                showEditProfile: false,
                showChangePassword: false,
                showProfile: false,
                showReviews: false,
                path: path
            });
        }
        else if (path === 'reviews') {
            this.setState({
                showReviews: true,
                showEditProfile: false,
                showChangePassword: false,
                showProfile: false,
                showOrders: false,
                path: path
            });
        }
    }

    renderEditProfile = () => {

        this.setState({
            showEditProfile: true,
            showProfile: false,
            showChangePassword: false,
            showOrders: false,
            showReviews: false,
        })
    }

    render() {

        const { showProfile, showEditProfile, showOrders, showReviews, path, data } = this.state;

        return (

            <React.Fragment>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={3} md={3} sm={4} xs={12}>
                            <UserDp />
                            <div style={{ height: 10 }} />
                            <NavigationList path={path} />
                        </Grid>
                        <Grid item lg={9} md={9} sm={8} xs={12}>
                            {
                                showProfile &&
                                <MyProfile user={data} renderEditProfile={this.renderEditProfile} />
                            }
                            {
                                showEditProfile &&
                                <EditProfile user={data} />
                            }
                            {
                                showOrders &&
                                <MyOrders user={data} />
                            }
                        </Grid>

                    </Grid>
                    {/* <img src={`http://localhost:8000/${data.fileImagePath}`} /> */}
                </Container>

            </React.Fragment>
        )
    }
}

export default App;