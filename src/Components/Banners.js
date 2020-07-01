import React from 'react';
//Bootstrap
import { Carousel } from 'react-bootstrap';
//React Router
import { Link } from 'react-router-dom'

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