import React, { Component } from 'react';
import { CssBaseline, Grid, Container, Typography, TextField, Button, Card, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//Icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

//React Router
import { Link } from 'react-router-dom';

//Configs
import firebase from '../Config/Firebase';

// Casecading Styleheet
import '../App.css';

class Login extends Component {

    state = {
        username: null,
        password: null,
        passwordChar: 'password',
        showPassword: false,
    }

    loginWithGoogle = () => {

        // alert('hello')
        // const provider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth().signInWithPopup(provider)
        //     .then(result => {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         //var token = result.credential.accessToken;
        //         //console.log(result)
        //         // The signed-in user info.
        //         var user = result.user;

        //         console.log(result.additionalUserInfo.profile, user);

        //         const userData = {
        //             email: firebase.auth().currentUser.email,
        //             uid: firebase.auth().currentUser.uid,
        //             // userName: result.additionalUserInfo.profile.name,
        //             userName: user.displayName,
        //             // photoURL: result.additionalUserInfo.profile.picture,
        //         }

        //         axios({
        //             url: 'http://localhost:8000/user/add-user',
        //             method: "POST",
        //             data: userData,
        //         }).then(response => {
        //             //handle success
        //             console.log(response);
        //             window.location.replace('/')
        //         }).catch(err => {
        //             //handle error
        //             console.log(err);
        //         });

        //     })
        //     .catch(error => {
        //         // Handle Errors here.
        //         //var errorCode = error.code;
        //     });
    }

    loginWithFaceBook = () => {

        // const provider = new firebase.auth.FacebookAuthProvider();
        // firebase.auth().signInWithPopup(provider).then(function (result) {
        //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //     //var token = result.credential.accessToken;
        //     // The signed-in user info.
        //     var user = result.user;

        //     // console.log(user.displayName, user);


        //     const userData = {
        //         email: firebase.auth().currentUser.email,
        //         uid: firebase.auth().currentUser.uid,
        //         // userName: result.additionalUserInfo.profile.name,
        //         userName: user.displayName,
        //         // photoURL: result.additionalUserInfo.profile.picture,
        //     }

        //     axios({
        //         url: 'http://localhost:8000/user/add-user',
        //         method: "POST",
        //         data: userData,
        //     }).then(response => {
        //         //handle success
        //         console.log(response);
        //         window.location.replace('/')
        //     }).catch(err => {
        //         //handle error
        //         console.log(err);
        //     });

        // })
        //     .catch(error => {
        //         // Handle Errors here.
        //         //var errorCode = error.code;
        //     });
    }

    loginHandler = () => {
        const { username, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(() => {
                window.location.replace('/')
            })
            .catch(function (error) {
                var errorMessage = error.message;
                console.log('User Auth Failed $Error: ' + errorMessage);
            });
    }

    render() {

        const { classes } = this.props;
        const { showPassword, passwordChar } = this.state;

        return (
            <Container maxWidth="xs">
                <CssBaseline />
                <Card className={classes.card}>
                    <Typography variant="h3" style={{ textAlign: 'center' }}>
                        Login
                    </Typography>
                    <div style={{ height: 30 }} />
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                        label="Email"
                        type="email"
                        placeholder="Enter Email Address"
                        autoComplete="email"
                        autoFocus
                        onChange={e => { this.setState({ username: e.target.value }) }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused,
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon style={{ color: '#087059' }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: { color: '#4b5652' },
                        }}
                    />
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        margin="normal"
                        size="small"
                        fullWidth
                        label="Password"
                        type={passwordChar}
                        placeholder="Enter Password"
                        autoComplete="current-password"
                        onChange={e => { this.setState({ password: e.target.value }) }}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline,
                                focused: classes.focused,
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon style={{ color: '#087059' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    {
                                        showPassword ?
                                            <VisibilityIcon style={{ color: '#087059', cursor: 'pointer' }} onClick={() => { this.setState({ showPassword: false, passwordChar: 'password' }) }} />
                                            :
                                            <VisibilityOffIcon style={{ color: '#087059', cursor: 'pointer' }} onClick={() => { this.setState({ showPassword: true, passwordChar: 'text' }) }} />
                                    }
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: { color: '#4b5652' },
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        style={{
                            color: 'white',
                            backgroundColor: '#087059',
                            marginTop: 10,
                        }}
                        onClick={this.loginHandler}
                    >
                        Login
                    </Button>
                    <div style={{ height: 5 }} />
                    <span>Not a Member yet? </span>
                    <Link to='/create-account' style={{
                        textDecoration: 'none', color: 'blue',
                    }}>
                        Create Account
                    </Link>
                    <div style={{ height: 25 }} />
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                style={{
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    backgroundColor: '#DB4437',
                                    borderColor: 'transparent',
                                    fontSize: '14px'
                                }}
                                onClick={this.loginWithGoogle}
                                size="small"
                            >
                                Google
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                style={{
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    backgroundColor: '#4267B2',
                                    borderColor: 'transparent',
                                    fontSize: '14px'
                                }}
                                onClick={this.loginWithFaceBook}
                                size="small"
                            >
                                Facebook
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Container >
        );
    }
}

const styles = theme => ({
    card: {
        padding: 30,
        [theme.breakpoints.up('md')]: {
            padding: '50px 70px 50px'
        },
    },
    textField: {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
            "& $notchedOutline": {
                borderColor: '#087059 !important',
                border: '2px solid',
            }
        },
        marginBottom: '10px',
    },
    notchedOutline: {
        borderColor: '#087059',
    },
    focused: {
        "& $notchedOutline": {
            borderColor: '#087059 !important',
        },
    },
});

export default withStyles(styles)(Login);