import React, { Component } from 'react';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Grid } from '@material-ui/core';
//Axios
import axios from 'axios';
//Config
import { baseUrl } from '../../Config/api';
//Sweetalert
import swal from 'sweetalert2';

//Components
import Loader from '../../Components/Loader';
import Details from './Components/ItemDetails';
import ServiceInfo from './Components/ServiceInfo';
import Description from './Components/ItemDescription';
// import Reviews from './Components/ItemReviews';

class ProductDetails extends Component {

    state = {
        quantity: 1,
        user: null,
        productDetails: {},
        description: '',

        isLoading: true,
    }

    componentDidMount() {
        const { userData } = this.props;

        //Get Prdouct Details
        this.getProductDetails();

        if (userData) {
            this.setState({
                user: userData
            })
        }

    }

    componentDidUpdate(prevProps) {
        const { userData } = this.props;

        if (prevProps !== this.props) {
            console.log('props change hui')
            if (userData) {
                this.setState({
                    user: userData
                })
            }
        }
    }

    getProductDetails = () => {
        const prodId = this.props.match.params.prodId;

        axios({
            url: `${baseUrl}/products/get-details/${prodId}`,
            method: "GET",
        })
            .then(response => {
                this.setState({
                    productDetails: response.data.product,
                    isLoading: false,
                })
            })
            .catch(err => {
                //handle error
                this.setState({
                    isLoading: false,
                }, () => {
                    swal.fire({
                        icon: 'error',
                        title: 'Something went wrong',
                        text: 'Ecommer Store'
                    });
                })
                console.log(err);
            });
    }

    render() {

        const { productDetails, user, isLoading } = this.state;

        if (isLoading) {
            return <Loader />
        } else {
            return (
                <Container maxWidth="lg">
                    <CssBaseline />
                    <div style={{ backgroundColor: '#fff' }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={9} lg={9}>
                                <Details
                                    {...this.props}
                                    user={user}
                                    prod={productDetails}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}>
                                <ServiceInfo
                                    {...this.props}
                                    user={user}
                                    prod={productDetails}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <br /> <br />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Description prod={productDetails} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            {/* <Reviews /> */}
                        </Grid>
                    </Grid>
                </Container>
            );
        }
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