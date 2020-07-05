import React, { Component } from 'react';
//Material UI
import {
    Container,
    Typography,
    Grid,
    Divider,
    Box,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
//React Router
import { Link } from 'react-router-dom';
//Axios
import axios from 'axios';
//Sweetalerts
import swal from 'sweetalert2';

// Config
// import firebase from '../../Config/Firebase';
// Components
import BillingCard from '../Components/BillingCard';

const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'PKR',
    minimumFractionDigits: 2
})

const styles = theme => ({
    rating1: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: "#c45500",
            textDecoration: 'none'
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    pricePara: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
});

class Cart extends Component {

    state = {
        products: [],
        userID: '',
        subTotal: 0,
    }

    // componentDidMount() {
    //     this.getUserDetails();
    //     setTimeout(() => {
    //         console.log('time hogya')
    //         this.getCart();
    //     }, 2000);

    // }

    componentDidUpdate(prevProps) {
        // if (this.props.token !== prevProps.token) {
        //     this.getCart();
        //     this.getUserDetails();
        // }
    }

    // getUserDetails = () => {
    //     console.log('test');

    //     firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             const userID = firebase.auth().currentUser.uid;

    //             axios({
    //                 url: 'http://localhost:8000/user/get-current-user',
    //                 method: "POST",
    //                 data: { userID: userID },
    //             })
    //                 .then(result => {
    //                     console.log(result.data.data._id, "test");
    //                     this.setState({
    //                         userData: result.data.data,
    //                         userID: result.data.data._id,
    //                     })
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 })
    //         } else {
    //             swal("Please Login First");
    //         }
    //     })
    // }

    // getCart = () => {

    //     const { userID } = this.state;

    //     console.log(userID);

    //     axios({
    //         url: 'http://localhost:8000/user/get-cart',
    //         method: "POST",
    //         data: { userID: userID }
    //     }).then(res => {
    //         console.log(res.data.products);

    //         this.setState({
    //             products: res.data.products,
    //         }, () => {
    //             let subtotal = 0;
    //             this.state.products.forEach(product => {
    //                 subtotal = subtotal + (product.productId.price * product.quantity)
    //             })
    //             this.setState({
    //                 subTotal: subtotal,
    //             })
    //         })
    //     }).catch(err => {
    //         console.log(err.response.statusText);
    //     })
    // }

    deleteFromCart = prodId => {
        let uid = this.state.userID;

        axios({
            url: 'http://localhost:8000/products/post-delete-from-cart',
            method: 'POST',
            data: {
                prodId,
                uid,
            },
        })
            .then(res => {
                console.log(res.data)
                this.getCart();
            })
            .catch(err => {
                console.log(err.response.statusText);
            })
    }

    render() {
        const { classes } = this.props;
        const { products, subTotal } = this.state;

        return (
            <div>
                <Container style={{ marginTop: 30 }}>
                    <Typography variant='h5' style={{ fontWeight: 'normal', color: '#666666' }}>Shopping Cart</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={9}>
                            <p style={{ float: 'right', fontSize: 13 }} className={classes.pricePara}>Price</p>
                            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                            {products.map((value, index) => {
                                return (
                                    <React.Fragment>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={4}>
                                                <div style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center,',
                                                    display: 'inline-flex',
                                                    width: '100%',
                                                }}>
                                                    {value.productId.pictures && <Link to={`/products/${value.productId._id}`}>
                                                        <img style={{ height: 218, width: 242 }} src={value.productId.pictures[0]} />
                                                    </Link>}
                                                </div>
                                            </Grid>
                                            <Grid item xs={9} md={6}>
                                                <Link className={classes.link} to={`/product-details/${value.productId._id}`}>
                                                    <Typography style={{ fontWeight: 'bold' }} className={classes.title} gutterBottom>
                                                        {value.productId.title}
                                                    </Typography>
                                                </Link>
                                                <div className={classes.rating1}>
                                                    <Rating
                                                        name="hover-side"
                                                        value={value.productId.ratings}
                                                        size='small'
                                                    />
                                                    <Box style={{ marginTop: -7, fontSize: 13 }} ml={1}><Link to={`/product-details/${value.productId._id}`}>{value.productId.ratings ? value.productId.ratings : 0}</Link></Box>
                                                </div>
                                                {/* <Typography style={{ fontSize: 13 }} className={classes.title} color="textSecondary" gutterBottom>
                                                    Sold and Shipped by: <strong>{value.productId.soldAndShippedBy}</strong>
                                                </Typography> */}
                                                <br />
                                                <Grid container>
                                                    {/* <QuantitySelect value={value.quantity} /> */}
                                                    <Button style={{ height: 36, width: 100, marginTop: 8 }} onClick={() => this.deleteFromCart(value.productId._id)} variant='outlined'>Delete</Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={3} md={2}>
                                                <Typography variant='caption' style={{ fontSize: 16, fontWeight: 'bold', color: '#087059', float: 'right' }}>
                                                    Rs. {formatter.format(value.productId.price)}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                                    </React.Fragment>
                                )
                            })}
                            <Divider style={{ marginTop: 10, marginBottom: 20 }} />
                            <Typography style={{ float: 'right' }}>
                                Subtotal(1 item): <strong style={{ color: '#087059' }}>{formatter.format(subTotal)}</strong>
                            </Typography>
                        </Grid>
                        <Grid item md={3} style={{ width: '100%' }}>
                            <BillingCard price={subTotal} />
                        </Grid>
                    </Grid>
                </Container>
            </div >
        );
    }
}

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function QuantitySelect(props) {
    const classes = useStyles();
    const [quantity, setQuantity] = React.useState(props.value);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setQuantity(event.target.value);
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Quantity
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={quantity}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    style={{ width: '100%', height: 36 }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default withStyles(styles)(Cart);