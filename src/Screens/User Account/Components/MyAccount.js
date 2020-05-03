import React, { Component } from 'react';

//Material UI
import { Container, Grid, Card, InputLabel, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Profile(props) {

    const classes = styles();
    const { user } = props;

    return (
        <div>
            <Card style={{
                padding: 40,
                marginTop: 10,
            }}>
                <Grid container spacing={3}>

                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Name</InputLabel>
                        <Typography variant="h6" style={{ color: 'black' }} color="textSecondary" component="h5">
                            {/* {user.name}  */} Talha Khalid
                                </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Email Address</InputLabel>
                        <Typography variant="h6" style={{ color: 'black' }} color="textSecondary" component="h5">
                            {/* {user.email}  */}hafiz.talhakh@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Contact</InputLabel>
                        <Typography variant="h6" style={{ color: 'black' }} color="textSecondary" component="h5">
                            {/* {user.number}  */} 03362502067
                                </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Birthday</InputLabel>
                        <Typography variant="h6" style={{ color: 'black' }} color="textSecondary" component="h5">
                            {/* {user.birthday}  */}Sept 29, 1996
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <InputLabel style={{ color: '#666666', fontWeight: 'bold' }}>Gender</InputLabel>
                        <Typography variant="h6" style={{ color: 'black' }} color="textSecondary" component="h5">
                            {/* {user.gender}  */} Male
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <div className={classes.heightforWeb} />
                        <Button variant="contained" fullWidth
                            className={classes.btn}
                            onClick={props.renderEditProfile}
                        >
                            Edit Profile
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

const styles = makeStyles(theme => ({
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
        }

    },
    heightforWeb: {
        height: 10,
        [theme.breakpoints.up('md')]: {
            height: 200,
        }
    }
}));
