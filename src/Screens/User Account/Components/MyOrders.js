import React from 'react';

// React Router
import { Link } from 'react-router-dom';

//Material UI
import { Grid, Card, Paper, ListItem, ListItemText, IconButton, Typography, Button, Divider, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Bootstrap
import { Table } from 'react-bootstrap';

//Icons
import DoneIcon from '@material-ui/icons/Done';

//Cascading Stylesheet
import '../../../App.css'

//Moment
// import moment from 'moment';

// getOrders = () => {

//     firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             const userID = firebase.auth().currentUser.uid;
//             console.log(userID, 'chal raha hai');

//             Axios({
//                 url: "http://localhost:8000/user/get-order",
//                 method: 'POST',
//                 data: {
//                     userID: userID
//                 }
//             })
//                 .then(res => {
//                     this.setState({
//                         orders: res.data.orders,
//                         noOrders: false,
//                     });
//                 })
//                 .catch(err => {
//                     //handle error
//                     console.log(err);
//                 });
//         }
//         else {
//             // User not logged in.
//         }
//     });
// }

export default function Orders(props) {
    const { orders } = props;
    const classes = styles();

    return (
        <Card className={classes.containerCard}>
            <div className={classes.root}>
                {/* {orders.length > 0
                    ?
                    orders.map((order, i) => {
                        return ( */}
                <Paper style={{ width: '100%' }} variant="outlined">
                    <Typography variant='body1' style={{ fontSize: 15, padding: 5 }}>
                        Order # 83031
                            <Button className={classes.btn}
                        // onClick={() => { window.open(order.receipt, '_blank') }}
                        >
                            Open receipt
                            </Button>
                        <br />
                        <Typography style={{ fontSize: 13, fontFamily: '"Noto Sans KR", sans-serif', }} variant='caption' color="textSecondary" gutterBottom>
                            <strong>Placed on sept 29, 1996</strong>
                        </Typography>
                    </Typography>
                    <Divider />
                    {/* {order.products.map((product, i2) => {
                            return ( */}
                    <Grid style={{ padding: 20 }} container spacing={1}>
                        {/* {product.product.pictures &&  */}
                        <Grid item md={2}>
                            <img style={{ hegiht: 80, width: 80 }} src="" alt="pic" />
                        </Grid>
                        {/* } */}
                        <Grid item md={4}>
                            <Typography style={{ width: '100%' }}>
                                Samsung Galaxy S6
                                    </Typography>
                        </Grid>
                        <Grid item md={1}>
                            <Typography variant='caption' style={{ width: '100%' }}>
                                <Typography style={{ fontSize: 15, fontFamily: '"Noto Sans KR", sans-serif', }} variant='caption' color="textSecondary" gutterBottom>
                                    Qty:
                                        </Typography> <strong style={{ fontSize: 15 }}>2</strong>
                            </Typography>
                        </Grid>
                        {/* {order.delievery === "Delievered" ? */}
                        <Grid item md={2}>
                            <Chip style={{ height: 20 }} label="Delivered" />
                        </Grid>
                        <Grid item md={3}>
                            <Typography style={{ fontSize: 13, fontFamily: '"Noto Sans KR", sans-serif', }} variant='caption' color="textSecondary" gutterBottom>
                                <strong>Delivered on Spet 29, 1996</strong>
                            </Typography>
                        </Grid>
                        {/* :
                                    <React.Fragment>
                                <Grid item md={2}>
                                    <Chip style={{ height: 20 }} label="Not Yet Delivered" />
                                </Grid>
                                <Grid item md={3}>
                                    <Typography style={{ fontSize: 13 }} variant='caption' color="textSecondary" gutterBottom>
                                        <strong>DELIVERY PENDING</strong>
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                                } */}
                    </Grid>
                    <Divider />
                    {/* )
                        })} */}
                </Paper>
                <br />
                {/*  )
                    })
                    :
            <h1>No orders</h1>} */}
            </div>
        </Card >
    );

}

const styles = makeStyles(theme => ({
    containerCard: {
        padding: 40,
        marginTop: 10,
        height: 500,
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
        },
    },
    btn: {
        color: '#666666',
        backgroundColor: 'transparent',
        border: '2px solid black',
        borderColor: '#087059',
        marginRight: '20px',
        // height: 47,
        marginTop: 5,
        float: 'right',
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
}));