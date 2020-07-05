import React, { Component, Fragment } from 'react';
//Material UI
import { CssBaseline, Grid, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//Config
import { baseUrl } from '../Config/api';
//Axios
import axios from 'axios';

//Assets
import banner1 from '../Assets/Images/banner1.jpg'
import banner2 from '../Assets/Images/banner2.jpg'
//Components
import Products from '../Components/ProductCard';
import Banner from '../Components/Banners';
import ListProd from '../Components/HorizontalScrollingMenu';

class LandingPage extends Component {

    state = {
        items: [],
        isLoading: true,
    }

    componentDidMount() {
        this.getLandingPageItems();
    }

    getLandingPageItems = () => {

        axios({
            url: `${baseUrl}/products/get-landing-page-products`,
            method: 'GET',
        })
            .then(response => {
                this.setState({
                    items: response.data.products,
                    isLoading: false,
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    renderLandingPage = () => {
        const { items } = this.state;

        return (
            <Container maxWidth="lg">
                <CssBaseline />
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Banner images={[banner1, banner2]} />
                    </Grid>
                </Grid>
                <div style={{ height: 20 }} />
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h5" style={{ marginBottom: 10 }}>
                            Flash Sale
                        </Typography>
                    </Grid>
                    {
                        items.map((item, index) => {
                            return (
                                <Grid item xs={6} sm={6} md={2} lg={2} key={index}>
                                    <Products data={item} origin="Landing Page" />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <div style={{ height: 20 }} />
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h5" style={{ marginBottom: 10 }}>
                            Just For You
                        </Typography>
                    </Grid>
                    {
                        items.map((item, index) => {
                            return (
                                <Grid item xs={6} sm={6} md={2} lg={2} key={index}>
                                    <Products data={item} origin="Landing Page" />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <div style={{ height: 20 }} />
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h5" style={{ marginBottom: 10 }}>
                            Categories
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ListProd data={items} />
                    </Grid>
                </Grid>
            </Container>
        )
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.isLoading ?
                        <div
                            style={{
                                display: 'flex',
                                minHeight: '50vh',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // display: 'inline-flex',
                                // width: '100%',
                                // margin: 20,
                            }}>
                            <CircularProgress style={{ color: '#087059', opacity: 0.7, height: 50, width: 50 }} />
                        </div>
                        :
                        this.renderLandingPage()
                }
            </Fragment>
        )
    }
}

const styles = theme => ({

});

export default withStyles(styles)(LandingPage);
