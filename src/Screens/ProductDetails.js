import React, { Component } from 'react';

//React Roter
import { Link } from 'react-router-dom';

//Axios
import axios from 'axios';

//Config
import firebase from '../Config/Firebase';
import { urlToServer } from '../Config/Backend';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Grid, Card, CardMedia, CardActions, Box, Typography, Button, Switch, FormControlLabel, List, ListItem, ListItemIcon, ListItemText, Divider, Chip, Checkbox, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

// Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HouseIcon from '@material-ui/icons/House';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

//Bootstrap
import { Form } from 'react-bootstrap';

//Sweetalert
import Swal from 'sweetalert2';

//React Image Gallery
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

//Assets
import s6 from '../Assets/Images/s6.jpg'
import s10 from '../Assets/Images/s10.jpeg'
import a30 from '../Assets/Images/a30.jpeg'
import realme5 from '../Assets/Images/realme5.jpg'
import oppof7 from '../Assets/Images/oppof7.jpg'
import banner1 from '../Assets/Images/banner1.jpg'
import banner2 from '../Assets/Images/banner2.jpg'

// Casecading Styleheet
import '../App.css';

//Components
import Description from '../Components/HtmlViewer';

class ProductDetails extends React.Component {

    state = {
        quantity: 1,
        userData: {},
        productData: {},
        description: '',
        isLoading: true,

    }

    // componentDidMount() {
    //     this.getUserDetails();
    //     this.getProductDetails();

    // }

    // getProductDetails = () => {

    //     const prodID = this.props.match.params.prodId;

    //     console.log(prodID);

    //     axios({
    //         url: 'http://localhost:8000/products/get-product-details',
    //         method: "POST",
    //         data: { prodID: prodID },
    //     }).then(response => {
    //         this.setState({
    //             productData: response.data.data,
    //             isLoading: false,
    //         }, () => {
    //             console.log('kuch mila hai', this.state.description)
    //         })
    //     }).catch(err => {
    //         //handle error
    //         console.log(err);
    //     });
    // }

    // getUserDetails = () => {

    //     firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             const userID = firebase.auth().currentUser.uid;

    //             axios({
    //                 url: 'http://localhost:8000/user/get-current-user',
    //                 method: "POST",
    //                 data: { userID: userID },
    //             }).then(response => {
    //                 this.setState({
    //                     userData: response.data.data,
    //                     isLoading: false,
    //                 }, () => {
    //                     console.log('user mila hai', this.state.userData)
    //                 })
    //             }).catch(err => {
    //                 //handle error
    //                 console.log(err);
    //             });
    //         }
    //         else {
    //             // User not logged in.
    //         }
    //     });
    // }

    // handleBuyNow = () => {
    //     const { userData, productData, quantity } = this.state;

    //     // const userID = userData._id;
    //     let msg = 'Item added in cart';

    //     axios({
    //         url: 'http://localhost:8000/products/add-to-cart',
    //         method: "POST",
    //         data: {
    //             userID: userData._id,
    //             prodID: productData._id,
    //             quantity: quantity,
    //         },
    //     }).then(response => {

    //         window.location.replace('/cart');

    //     }).catch(err => {
    //         //handle error
    //         console.log(err);
    //     });
    // }

    // handleAddToCart = () => {
    //     const { userData, productData, quantity } = this.state;

    //     // const userID = userData._id;
    //     let msg = 'Item added in cart';

    //     axios({
    //         url: 'http://localhost:8000/products/add-to-cart',
    //         method: "POST",
    //         data: {
    //             userID: userData._id,
    //             prodID: productData._id,
    //             quantity: quantity,
    //         },
    //     }).then(response => {

    //         Swal(msg);

    //     }).catch(err => {
    //         //handle error
    //         console.log(err);
    //     });
    // }

    // handleQuantity = (opt) => {

    //     if (opt === 'inc') {
    //         this.setState({
    //             quantity: this.state.quantity + 1,
    //         })
    //     }
    //     else if (opt === 'dec') {
    //         this.setState({
    //             quantity: this.state.quantity - 1,
    //         })
    //     }

    // }

    // handleReviews = () => {

    //     const { productData, } = this.state;

    //     axios({
    //         url: 'http://localhost:8000/products/get-reviews',
    //         method: "POST",
    //         data: {
    //             prodID: productData._id,

    //         },
    //     }).then(response => {


    //     }).catch(err => {
    //         //handle error
    //         console.log(err);
    //     });

    // }

    renderTopSection = (prod, user) => {

        const { classes } = this.props;
        const { quantity } = this.state;

        // const images = [];
        // prod.pictures &&
        //     prod.pictures.forEach(url => {
        //         images.push({
        //             original: url,
        //             thumbnail: url,
        //         })
        //     });

        return (
            <div style={{
                paddingLeft: 5,
                backgroundColor: '#fff'
            }}>
                <Grid container spacing={1}>
                    <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Grid container spacing={1}>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <div style={{ padding: 10 }}>
                                    <ImageGallery
                                        items={[{ original: s6, thumbnail: s6 }, { original: s10, thumbnail: s10 }]}
                                        thumbnailPosition="bottom"
                                        style={{ height: 50 }}
                                        autoPlay={false}
                                        showNav={false}
                                        showFullscreenButton={false}
                                        showPlayButton={false}
                                    />
                                </div>
                            </Grid>
                            <Grid item lg={8} md={8} sm={8} xs={8}>
                                <div style={{ paddingLeft: 20, paddingTop: 20 }}>
                                    <Typography variant="h5">Samsung S6</Typography>
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                        <Rating name="read-only" style={{ fontSize: 17 }} value={4.2} readOnly />
                                    </div>
                                    <div style={{
                                        width: 1,
                                        background: '#9e9e9e',
                                        marginLeft: 7,
                                        marginRight: 4,
                                        display: 'inline-block',
                                        height: 14,
                                        verticalAlign: 'middle',
                                    }} />
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                        <Link >
                                            <Typography>15 Ratings</Typography>
                                        </Link>
                                    </div>
                                    <div style={{ height: 20 }} />
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 3 }}>
                                        <Typography>Brand: </Typography>
                                    </div>
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                        <Link >
                                            <Typography>Samsung</Typography>
                                        </Link>
                                    </div>
                                    <div style={{
                                        width: 1,
                                        background: '#9e9e9e',
                                        marginLeft: 7,
                                        marginRight: 4,
                                        display: 'inline-block',
                                        height: 14,
                                        verticalAlign: 'middle',
                                    }} />
                                    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                        <Link >
                                            <Typography>Other Brands</Typography>
                                        </Link>
                                    </div>
                                </div>
                                <div style={{ height: 20 }} />
                                <hr />
                                <div style={{ paddingLeft: '20px', paddingTop: '20px', color: '#666666' }}>
                                    <Typography variant="h4" style={{ color: 'green' }}>Rs.5,000</Typography>
                                    <br />
                                    <Typography variant="h6" style={{ color: 'inherit' }} color="textSecondary" component="h5">
                                        Quantity:
                                </Typography>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        style={{ height: 36, width: 64 }}
                                        onClick={() => {
                                            this.setState({
                                                quantity: this.state.quantity - 1,
                                            })
                                        }}>
                                        -
                                    </Button>
                                    <span style={{ marginLeft: '20px', marginRight: '20px' }}> {quantity} </span>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        style={{ height: 36, width: 64 }}
                                        onClick={() => {
                                            this.setState({
                                                quantity: this.state.quantity + 1,
                                            })
                                        }}>
                                        +
                                      </Button>
                                    <div style={{ height: 50 }} />
                                    <Button
                                        variant="contained"
                                        className={classes.btn}
                                        onClick={this.handleBuyNow}
                                    >
                                        Buy Now
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={classes.btn}
                                        onClick={this.handleAddToCart}
                                    >
                                        Add to Cart
                                </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12} style={{padding: 0}}>
                        <div style={{ backgroundColor: '#fafafa' }}>
                            <div>
                                <Typography style={{ paddingTop: '20px', paddingLeft: '20px', fontWeight: 'bold', marginBottom: 5 }} component="h6">Delivery Options</Typography>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={
                                        <React.Fragment>
                                            {
                                                !user ? <Typography component="p" variant="p" color="textPrimary">
                                                    {user.address}
                                                </Typography>
                                                    :
                                                    <Typography component="p" variant="p" color="textPrimary">
                                                        Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                                                        </Typography>
                                            }
                                        </React.Fragment>}
                                    />
                                </ListItem>
                                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                                        <HouseIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={
                                        <React.Fragment>
                                            <Typography component="p" variant="p" color="textPrimary" style={{ marginTop: 10 }}>
                                                Home Delivery
                                            </Typography>
                                            <span style={{ fontSize: '12px', color: '#9e9e9e' }}>1 to 3 days</span>
                                        </React.Fragment>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                                        <AttachMoneyIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="p"
                                                variant="p"
                                                color="textPrimary"
                                            >
                                                Cash on Delivery Available
                                                </Typography>
                                        </React.Fragment>}
                                    />
                                </ListItem>
                            </div>
                            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                            <div>
                                <Typography style={{ paddingTop: '20px', paddingLeft: '20px', fontWeight: 'bold' }} component="h6">Return & Warranty</Typography>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={
                                        <React.Fragment>
                                            <Typography component="p" variant="p" color="textPrimary">
                                                100% Authentic
                                            </Typography>
                                        </React.Fragment>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={
                                        <React.Fragment>
                                            <Typography component="p" variant="p" color="textPrimary" style={{ marginTop: 10 }}>
                                                14 days easy return
                                            </Typography>
                                            <span style={{ fontSize: '12px', color: '#9e9e9e' }}>Change of mind is not applicable</span>
                                        </React.Fragment>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                                        <VerifiedUserIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={
                                        <React.Fragment>
                                            <Typography component="p" variant="p" color="textPrimary">
                                                {/* {prod.warranty} */} 1 Year
                                                </Typography>
                                        </React.Fragment>}
                                    />
                                </ListItem>
                                <br />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )

    }

    renderProductDetails = (prod) => {
        const { classes } = this.props;

        return (
            <div
                style={{
                    padding: 40,
                    backgroundColor: '#fff',
                    color: '#666666',
                }}>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            Description:
                            </Typography>
                        {/* <Typography variant="p" style={{ color: 'black' }} color="textSecondary" component="p"> */}
                        <Description overview={prod.description} />
                        {/* </Typography> */}
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Typography variant="h6" style={{ color: '#000' }} color="textSecondary" component="h5">
                            Brand
                            </Typography>
                        <Typography variant="p" color="textSecondary" component="p">
                            {/* {prod.brand} */} Samsung
                            </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Typography variant="h6" style={{ color: '#000' }} color="textSecondary" component="h5">
                            Memory
                            </Typography>
                        <Typography variant="p" color="textSecondary" component="p">
                            111
                            </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Typography variant="h6" style={{ color: '#000' }} color="textSecondary" component="h5">
                            Camera
                            </Typography>
                        <Typography variant="p" color="textSecondary" component="p">
                            111212
                            </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderReviews = () => {

        return (
            <div>
                <Card>
                    <Grid container spacing={3}>
                        <Grid item sm={4}>
                            <div style={{
                                padding: '20px',
                            }}>
                                <Typography variant="h4">4/5</Typography>
                                {/* <div style={{ display: 'inline-block', verticalAlign: 'middle' }}> */}
                                    <Rating name="read-only" value={4} style={{ fontSize: '30px' }} />
                                {/* </div> */}
                                {/* <div style={{
                                    width: '1px',
                                    background: '#9e9e9e',
                                    marginLeft: '7px',
                                    marginRight: '4px',
                                    display: 'inline-block',
                                    height: '14px',
                                    verticalAlign: 'middle',
                                }} /> */}
                                {/* <div style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 10 }}> */}
                                    <Typography>
                                        <Link style={{ textDecoration: 'none', }}>
                                            7 Ratings
                                        </Link>
                                    </Typography>
                                {/* </div> */}
                            </div>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={0}>
                        <Grid item sm={1}></Grid>
                        <Grid item sm={10}>
                            <div style={{ backgroundColor: '#fafafa' }}>
                                <ListItem>
                                    <ListItemText
                                        secondary={
                                            <Box component="fieldset" mb={3} borderColor="transparent">
                                                <Rating name="read-only" value={4} style={{ fontSize: '17px' }} readOnly />
                                                <Typography variant="h6">by Talha Khalid</Typography>
                                            </Box>
                                        }
                                    />

                                    <ListItemText secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="p"
                                                variant="p"
                                                // className={classes.inline}
                                                color="textPrimary"
                                            >
                                                My Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                                            </Typography>
                                        </React.Fragment>}
                                    />
                                    {/* <Link> Change</Link> */}
                                </ListItem>
                                <Divider />
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }

    render() {

        const { productData, userData, isLoading } = this.state;

        return (
            <Container maxWidth="lg">
                <CssBaseline />
                <div style={{ height: 10 }} />
                <Grid container spacing={1}>
                    {/* {
                            isLoading ?
                                <div style={{
                                    minHeight: '50vh',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // float: 'center'
                                }}>
                                    <CircularProgress />
                                </div>
                                :
                        } */}
                    <Grid xs={12}>
                        {
                            this.renderTopSection(productData, userData)
                        }
                    </Grid>
                    <Grid xs={12}>
                        <div style={{ height: 20 }} />
                        {
                            this.renderProductDetails(productData)
                        }
                    </Grid>
                    <Grid xs={12}>
                        <div style={{ height: 20 }} />
                        {
                            this.renderReviews()
                        }
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const styles = theme => ({
    btn: {
        color: '#666666',
        backgroundColor: 'transparent',
        border: '2px solid black',
        borderColor: '#087059',
        marginRight: '20px',
        height: 47,
        width: 200,
        boxShadow: 'none',
        [theme.breakpoints.down('md')]: {
            marginBottom: 5,
        },
        '&:hover': {
            color: '#fff',
            backgroundColor: '#087059',
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
        }

    }
})

export default withStyles(styles)(ProductDetails);