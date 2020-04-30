import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Bootstrap
import { Carousel } from 'react-bootstrap';

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

    const images = props.images;

    return (
        <React.Fragment>
            <Carousel>
                {images.map((image, index) => {
                    return (
                        <Carousel.Item>
                            <Link target='_blank' to="/">
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </Link>
                        </Carousel.Item>
                    )
                })
                }
            </Carousel>
        </React.Fragment>
    )

}