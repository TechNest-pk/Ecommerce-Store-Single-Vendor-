import React, { Component } from 'react';
import { CssBaseline, Grid, Container, Typography, TextField, Button, Card, InputAdornment } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//Icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

//React Router
import { Link } from 'react-router-dom';

//firebase 
import firebase from '../Config/Firebase';

//Axios
import axios from 'axios';

//Sweet Alerts
import swal from 'sweetalert2';

//Assets
import cartImage from '../Assets/Images/cart.png';

class Register extends Component {

    state = {
        username: null,
        password: null,
        confirm_password: null,
        f_name: null,
        l_name: null,
        contact: null,
        passwordChar: 'password',
        showPassword: false,
    }

    createUser = () => {
        const { username,
            password,
            confirm_password,
            f_name,
            l_name,
            contact,
        } = this.state;

        if (password === confirm_password) {
            firebase.auth().createUserWithEmailAndPassword(username, password)
                .then(() => {
                    axios({
                        url: 'http://localhost:8000/user/add-user',
                        method: "POST",
                        data: {
                            email: username,
                            uid: firebase.auth().currentUser.uid,
                            userName: f_name + ' ' + l_name,
                            contact: contact,
                        },
                    }).then(response => {
                        //handle success
                        console.log(response);
                        swal.fire({
                            icon: 'success',
                            title: 'Mobile Store',
                            text: 'You are registered successfully',
                        }).then(() => window.location.replace('/'))
                    }).catch(err => {
                        //handle error
                        swal.fire({
                            icon: 'error',
                            title: "Internal Server Error",
                        });
                    });
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    swal.fire({
                        icon: 'error',
                        title: errorCode || "Something went wrong",
                        text: errorMessage,
                    });
                });
        }
        else {
            alert('password does not match');
        }

    }

    loginWithGoogle = () => {

        // alert('hello')
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //var token = result.credential.accessToken;
                //console.log(result)
                // The signed-in user info.
                var user = result.user;

                console.log(result.additionalUserInfo.profile, user);

                const userData = {
                    email: firebase.auth().currentUser.email,
                    uid: firebase.auth().currentUser.uid,
                    // userName: result.additionalUserInfo.profile.name,
                    userName: user.displayName,
                    // photoURL: result.additionalUserInfo.profile.picture,
                }

                axios({
                    url: 'http://localhost:8000/user/add-user',
                    method: "POST",
                    data: userData,
                }).then(response => {
                    //handle success
                    console.log(response);
                    window.location.replace('/')
                }).catch(err => {
                    //handle error
                    console.log(err);
                });

            })
            .catch(error => {
                // Handle Errors here.
                //var errorCode = error.code;
            });
    }

    loginWithFaceBook = () => {

        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            //var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            // console.log(user.displayName, user);


            const userData = {
                email: firebase.auth().currentUser.email,
                uid: firebase.auth().currentUser.uid,
                // userName: result.additionalUserInfo.profile.name,
                userName: user.displayName,
                // photoURL: result.additionalUserInfo.profile.picture,
            }

            axios({
                url: 'http://localhost:8000/user/add-user',
                method: "POST",
                data: userData,
            }).then(response => {
                //handle success
                console.log(response);
                window.location.replace('/')
            }).catch(err => {
                //handle error
                console.log(err);
            });

        })
            .catch(error => {
                // Handle Errors here.
                //var errorCode = error.code;
            });
    }

    render() {
        const { classes } = this.props;
        const { passwordChar, showPassword } = this.state;

        return (
            <Container maxWidth="md">
                <CssBaseline />
                <Card style={{ padding: 50 }}>
                    {/* <div style={{backgroundColor: '#e7e7e7', boxShadow: 'black', padding: 10, width: '26%', borderRadius: 5 }}>
                        <span style={{ color: '#087059', fontSize: 21 }} >Ecommerce </span><span style={{ color: '#4b5652', fontSize: 21 }} >Store</span>
                    </div> */}
                    <Typography variant="h5" style={{ marginBottom: 20 }}>
                        Create Account
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={7}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        id="f_name"
                                        label="First Name"
                                        name="f_name"
                                        autoComplete="first name"
                                        autoFocus
                                        onChange={e => { this.setState({ f_name: e.target.value }); }}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: { color: '#4b5652' },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        label="Last Name"
                                        onChange={e => { this.setState({ l_name: e.target.value }); }}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: { color: '#4b5652' },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                size="small"
                                fullWidth
                                label="Contact Number"
                                onChange={e => { this.setState({ contact: e.target.value }); }}
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline,
                                        focused: classes.focused,
                                    },
                                }}
                                InputLabelProps={{
                                    style: { color: '#4b5652' },
                                }}
                            />
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                size="small"
                                fullWidth
                                id="email"
                                label="Email Address"
                                onChange={e => { this.setState({ username: e.target.value }); }}
                                InputProps={{
                                    classes: {
                                        notchedOutline: classes.notchedOutline,
                                        focused: classes.focused,
                                    },
                                }}
                                InputLabelProps={{
                                    style: { color: '#4b5652' },
                                }}
                                helperText="You can use letters, numbers & periods"
                            />
                            <Grid container spacing={1}>
                                <Grid item xs={5}>
                                    <TextField
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        label="Password"
                                        type={passwordChar}
                                        onChange={e => { this.setState({ password: e.target.value }); }}
                                        style={{ marginBottom: 0 }}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: { color: '#4b5652' },
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        label="Confirm"
                                        type={passwordChar}
                                        onChange={e => { this.setState({ confirm_password: e.target.value }); }}
                                        style={{ marginBottom: 0 }}
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.notchedOutline,
                                                focused: classes.focused,
                                            },
                                        }}
                                        InputLabelProps={{
                                            style: { color: '#4b5652' },
                                        }}
                                    // error="password"
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    {
                                        showPassword ?
                                            <VisibilityIcon style={{ color: '#087059', cursor: 'pointer', marginTop: 8, float: 'right' }} onClick={() => { this.setState({ showPassword: false, passwordChar: 'password' }) }} />
                                            :
                                            <VisibilityOffIcon style={{ color: '#087059', cursor: 'pointer', marginTop: 8, float: 'right' }} onClick={() => { this.setState({ showPassword: true, passwordChar: 'text' }) }} />
                                    }
                                </Grid>
                            </Grid>
                            <span
                                //  style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.54)', fontWeight: '400', lineHeight: '1.66', letterSpacing: '0.03333em', marginLeft: 16 }}
                                className="MuiFormHelperText-root MuiFormHelperText-contained Mu MuiFormHelperText-marginDense">
                                Your password should be atleast 8 characters long
                            </span>
                            <div style={{ height: 15 }} />
                            <Button
                                fullWidth
                                variant="contained"
                                style={{
                                    color: '#fff',
                                    // textTransform: 'capitalize',
                                    backgroundColor: '#087059',
                                    borderColor: 'transparent'
                                }}
                                // onClick={this.createUser}
                            >
                                Sign up
                            </Button>
                            <div style={{ height: 5 }} />
                            <span
                                className="MuiFormHelperText-root MuiFormHelperText-contained Mu MuiFormHelperText-marginDense">
                                By clicking "SIGN UP" I agree to <Link to="/" style={{ color: 'blue', textDecoration: 'none' }}>Ecommerce Privacy Policy</Link>
                            </span>
                            <div style={{ height: 5 }} />
                            <span
                                className="MuiFormHelperText-root MuiFormHelperText-contained Mu MuiFormHelperText-marginDense">
                                or continue with,
                            </span>
                            <div style={{ height: 5 }} />
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        style={{
                                            color: 'white',
                                            textTransform: 'capitalize',
                                            backgroundColor: '#DB4437',
                                            borderColor: 'transparent'
                                        }}
                                        // onClick={this.loginWithGoogle}
                                    >
                                        Login with Google
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
                                            borderColor: 'transparent'
                                        }}
                                        // onClick={this.loginWithFaceBook}
                                    >
                                        Login with Facebook
                                    </Button>
                                </Grid>
                            </Grid>
                            <br />
                            <div style={{ float: 'right' }}>
                                <span>Already have an account? </span>
                                <Link to='/login' style={{
                                    textDecoration: 'none', color: 'blue',
                                }}>
                                    Login
                                </Link>
                            </div>
                        </Grid>
                        <Grid item sm={5}>
                            <div className="create-account-img" style={{ padding: 10, width: '100%' }}>
                                <img src={cartImage} alt="img" style={{ display: 'block', width: '70%', height: 'auto', marginLeft: '20%' }} />
                            </div>
                            <div style={{ padding: 10, textAlign: 'center' }}>
                                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        );
    }
}

const styles = theme => ({
    textField: {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
            "& $notchedOutline": {
                borderColor: '#087059 !important',
                border: '2px solid',
            }
        },
        marginBottom: 15,
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

export default withStyles(styles)(Register);