import React from 'react';
import { CssBaseline, Grid, Container, Typography, TextField, Button, Card, InputAdornment } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//React Router
import { Link } from 'react-router-dom';

//firebase 
import firebase from '../Config/Firebase';

//Axios
import axios from 'axios';

//Sweet Alerts
import swal from 'sweetalert2';

class Register extends React.Component {

    state = {
        username: null,
        password: null,
        confirm_password: null,
        f_name: null,
        l_name: null,
        contact: null,
        address: null,
        city: null,
        province: null,
        msg1: 'You are registered Successfully',
    }

    createUser = () => {
        const { username,
            password,
            confirm_password,
            f_name,
            l_name,
            contact,
            address,
            city,
            province,
            msg1
        } = this.state;

        if (password === confirm_password) {
            firebase.auth().createUserWithEmailAndPassword(username, password)
                .then(() => {
                    let name = f_name + ' ' + l_name;
                    axios({
                        url: 'http://localhost:8000/user/add-user',
                        method: "POST",
                        data: {
                            email: username,
                            uid: firebase.auth().currentUser.uid,
                            userName: name,
                            contact: contact,
                            address: address,
                            city: city,
                            province: province,
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


    handleTextFields = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Container maxWidth="md">
                <CssBaseline />
                <div style={{ height: 30 }} />
                <Card style={{ padding: 50 }}>
                    <Typography component="h1" variant="h3" style={{ textAlign: 'center', marginBottom: 15 }}>
                        Create Account
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        className={classes.textField}
                                        required
                                        size="small"
                                        fullWidth
                                        id="f_name"
                                        label="First Name"
                                        name="f_name"
                                        autoComplete="first name"
                                        autoFocus
                                        onChange={this.handleTextFields}
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
                                        variant="outlined"
                                        className={classes.textField}
                                        required
                                        size="small"
                                        fullWidth
                                        id="l_name"
                                        label="Last Name"
                                        name="l_name"
                                        autoComplete="last name"
                                        autoFocus
                                        onChange={this.handleTextFields}
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
                                variant="outlined"
                                className={classes.textField}
                                required
                                size="small"
                                fullWidth
                                name="contact"
                                label="Contact Number"
                                id="contact"
                                onChange={this.handleTextFields}
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
                                variant="outlined"
                                className={classes.textField}
                                required
                                size="small"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="username"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleTextFields}
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
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        className={classes.textField}
                                        required
                                        size="small"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        onChange={this.handleTextFields}
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
                                    // helperText="Your password should be 8 characters long"
                                    // FormHelperTextProps={{
                                    //     className: classes.helperText
                                    //   }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        className={classes.textField}
                                        required
                                        size="small"
                                        fullWidth
                                        name="confirm_password"
                                        label="Confirm Password"
                                        type="password"
                                        id="c_password"
                                        onChange={this.handleTextFields}
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
                            </Grid>
                            <span
                                //  style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.54)', fontWeight: '400', lineHeight: '1.66', letterSpacing: '0.03333em', marginLeft: 16 }}
                                className="MuiFormHelperText-root MuiFormHelperText-contained Mui-required MuiFormHelperText-marginDense">
                                Your password should be atleast 8 characters long
                            </span>
                            <div style={{ height: 15 }} />
                            <Button
                                fullWidth
                                variant="contained"
                                style={{
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    backgroundColor: '#087059',
                                    borderColor: 'transparent'
                                }}
                                onClick={this.createUser}
                            >
                                Signup
                            </Button>
                            {/* <div style={{ height: 10 }} /> */}
                            <div style={{ float: 'right', marginBottom: 12, marginTop: 8 }}>
                                <span>Already have an account? </span>
                                <Link to='/create-account' style={{
                                    textDecoration: 'none'
                                }}>
                                    <span
                                        onClick={this.props.handleRegister}
                                        style={{
                                            color: 'blue',
                                            cursor: 'pointer',
                                        }}
                                    >Login</span>
                                </Link>
                            </div>
                            {/* <div style={{ height: 15 }} /> */}
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
                                        onClick={this.loginWithGoogle}
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
                                        onClick={this.loginWithFaceBook}
                                    >
                                        Login with Facebook
                                    </Button>
                                </Grid>
                            </Grid>
                            <br />
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