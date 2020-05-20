import React from 'react';

//Axios
import axios from 'axios';

//Config
import firebase from '../../../Config/Firebase';

//Material UI
import { Grid, Card, Typography, InputLabel, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//Sweet Alerts
import swal from 'sweetalert2';

class App extends React.Component {

    state = {
        name: null,
        email: null,
        contact: null,
        gender: null,
        birthday: null,
        data: {},
    }

    componentDidMount() {
        const { user } = this.props;
        const { data } = this.state;

        console.log(user._id);

        if (data) {
            console.log('if chal raha hai', this.state, user);
            this.setState({
                name: user.name,
                email: user.email,
                contact: user.number,
                data: user,
                birthday: user.birthday,
                gender: user.gender,
            });
        }
        else {
            console.log('else chal raha hai', this.state, user);

        }
    }

    updateUser = () => {
        const { user } = this.props;
        const { name, gender, birthday, contact } = this.state;

        console.log('test');

        firebase.auth().onAuthStateChanged(users => {
            if (users) {
                if (user) {
                    const msg = 'Your Data updated successfully';
                    const updatedUserData = {
                        objectID: user._id,
                        userName: name,
                        contact: contact,
                        address: user.address,
                        gender: gender,
                        birthday: birthday,
                    }
                    axios({
                        url: 'http://localhost:8000/user/update-user',
                        method: "POST",
                        data: updatedUserData,
                    }).then(response => {
                        swal(msg);
                        window.location.reload();
                    }).catch(err => {
                        //handle error
                        swal(err);
                    });
                }
            }
            else {
                // User not logged in.
            }
        });
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        const { classes, user } = this.props;
        const { name, email, contact, gender, birthday } = this.state;

        return (

            <React.Fragment>

                <div>
                    <Card className={classes.containerCard}>
                        <Grid container spacing={1}>

                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Name</InputLabel>
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    // label="Full Name"
                                    value={name}
                                    onChange={e => { this.setState({ contact: e.target.value }) }}
                                    InputProps={{
                                        classes: {
                                            notchedOutline: classes.notchedOutline,
                                            focused: classes.focused,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Email Address</InputLabel>
                                <Typography variant="h6" color="textSecondary" className={classes.email} component="h5">
                                    {email} hafiz.talhakh@gmail.com
                                </Typography>
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Contact</InputLabel>
                                <TextField
                                    className={classes.textField}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    // label="Contact Number"
                                    value={contact}
                                    onChange={e => { this.setState({ contact: e.target.value }) }}
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
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Birthday</InputLabel>
                                <form noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        defaultValue={birthday}
                                        name="birthday"
                                        value={birthday}
                                        onChange={this.handleChange}
                                        // className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Gender</InputLabel>
                                <FormControl component="fieldset">
                                    <RadioGroup aria-label="gender" name="gender" defaultValue="Male" value={gender} onChange={this.handleChange}>
                                        <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                            </Grid>
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <div className={classes.heightforWeb} />
                                <Button variant="contained" fullWidth
                                    className={classes.btn}
                                    onClick={this.updateUser}
                                >
                                    Save Changes
                        </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </div>

            </React.Fragment>
        )
    }
}

const styles = theme => ({
    containerCard: {
        padding: 40,
        marginTop: 10,
        height: 500,
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
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
    btn: {
        color: '#666666',
        backgroundColor: 'transparent',
        border: '2px solid black',
        borderColor: '#087059',
        marginRight: '20px',
        height: 47,
        boxShadow: 'none',
        [theme.breakpoints.down('md')]: {
            marginBottom: 5,
        },
        '&:hover': {
            color: '#fff',
            backgroundColor: '#087059',
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
        },
    },
    email: {
        color: 'black',
        '&:hover': {
            cursor: 'not-allowed',
        }
    },
    heightforWeb: {
        height: 10,
        [theme.breakpoints.up('md')]: {
            height: 114,
        }
    }
});

export default withStyles(styles)(App);