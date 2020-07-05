import React, { Component, Fragment } from 'react';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
//React Roter
import { Link } from 'react-router-dom';
//Axios
import axios from 'axios';
//Config
import { baseUrl } from '../../../Config/api';
//Sweetalert
import swal from 'sweetalert2';
//React Image Gallery
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

//Assets
import s6 from '../../../Assets/Images/s6.jpg'
import s10 from '../../../Assets/Images/s10.jpeg'


const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0
})

class ProductDetails extends Component {

    state = {
        quantity: 1,
    }

    handleAddToCart = () => {
        const { quantity } = this.state;
        const { user, prod, history } = this.props;

        if (user) {
            axios({
                url: `${baseUrl}/products/add-to-cart`,
                method: "POST",
                data: {
                    userId: user._id,
                    prodId: prod._id,
                    quantity: quantity,
                },
            })
                .then(response => {
                    swal.fire({
                        icon: 'success',
                        text: 'Ecommerce Store',
                        title: 'Item added in Cart'
                    })

                })
                .catch(err => {
                    //handle error
                    swal.fire({
                        icon: 'error',
                        title: 'Something went wrong',
                        text: 'Ecommer Store'
                    });
                    console.log(err);
                })
        }
        else {
            swal.fire({
                icon: 'error',
                title: 'Please Login first',
                text: 'Ecommerce Store'
            })
                .then(() => {
                    history.push('/login');
                })
        }
    }

    render() {

        const { classes, prod } = this.props;
        const { quantity } = this.state;

        return (
            <Fragment>
                <Grid container spacing={0}>
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
                            <Typography variant="h5">{prod.title}</Typography>
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
                                    <Typography>{prod.brand}</Typography>
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
                                <Link > {/* yahan km krna hai */}
                                    <Typography>Other Brands</Typography>
                                </Link>
                            </div>
                        </div>
                        <div style={{ height: 20 }} />
                        <hr />
                        <div style={{ paddingLeft: '20px', paddingTop: '20px', color: '#666666' }}>
                            <Typography variant="h4" style={{ color: 'green' }}>{formatter.format(prod.price)}</Typography>
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
                                        quantity: quantity - 1,
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
                                        quantity: quantity + 1,
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
            </Fragment>
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