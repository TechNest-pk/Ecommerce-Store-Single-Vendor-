import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';

//React Router
import { Link } from 'react-router-dom';

// Casecading Styleheet
import '../App.css';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        height: 330,
        // maxHeight: 350,
    },
    cardListView: {
        width: 198,
        height: 300,
    },
    media: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
        paddingTop: '100%', // 16:9

    },
    cardImg: {
        padding: '10px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    box: {
        position: 'relative',
    },
}));

const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'PKR',
    minimumFractionDigits: 0
})

export default function ProductCard(props) {

    const classes = useStyles();
    const prod = props.data.productId;

    return (
        <div>

            <Card className={props.origin === 'Landing Page' ? classes.card : classes.cardListView}>
                <Link to={`/product/${prod._id}`} style={{ textDecoration: 'none', color: 'black' }} >
                    <div className={classes.cardImg}>
                        <CardMedia
                            className={classes.media}
                            // image={image}
                            // component={<img src={image} style={{ width: '100%', height: 'auto', display: 'block' }} />}
                            title="Add to Cart"
                        />
                    </div>
                    <CardContent>
                        <Typography variant="h5" style={{ textAlign: 'center' }} color="textSecondary" component="h5">
                            {prod.title}
                        </Typography>
                        <Typography variant="h6" style={{ color: 'orange', textAlign: 'center', marginBottom: '-12px' }} color="textSecondary" component="h6">
                            {/* {formatter.format(prod.price)} */}
                            {prod.price}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>


        </div >
    )
}

// export default ProductCard;