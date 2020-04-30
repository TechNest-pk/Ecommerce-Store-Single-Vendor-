import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';

//React Router
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        height: 330,
        // maxHeight: 350,
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

export default function ProductCard(props) {

    const classes = useStyles();
    const image = props.data.image;
    const brandTitle = props.data.name;

    return (
        <div>

            <Card className={classes.card}>
                <Link to={`/product`} style={{ textDecoration: 'none', color: 'black' }} >
                    <div className={classes.cardImg}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            // component={<img src={image} style={{ width: '100%', height: 'auto', display: 'block' }} />}
                            title="Add to Cart"
                        />
                    </div>
                    <CardContent>
                        <Typography variant="h5" style={{ textAlign: 'center' }} color="textSecondary" component="h5">
                            {brandTitle}
                        </Typography>
                        <Typography variant="h6" style={{ color: '#000', textAlign: 'center', marginBottom: '-12px' }} color="textSecondary" component="h6">
                            Rs. 5,000
                        </Typography>
                    </CardContent>
                </Link>
            </Card>


        </div >
    )
}

// export default ProductCard;