import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    btn: {
        color: '#fff',
        backgroundColor: '#087059',
        width: '90%',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#087059',
        }
    }
});

const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'PKR',
    minimumFractionDigits: 2
})

export default function OutlinedCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center,',
            display: 'inline-flex',
            width: '100%',
            marginBottom: 32,
        }}>
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <Typography variant="h6" >
                        Subtotal(1 item): <strong style={{ color: 'green' }}>Rs. {formatter.format(props.price)}</strong>
                    </Typography>
                </CardContent>
                <CardActions>
                    {props.origin !== "review"
                        ?
                        <Link to='/buy/addressselect' style={{ textDecoration: 'none', width: '100%' }}>
                            <div style={{
                                justifyContent: 'center',
                                alignItems: 'center,',
                                display: 'inline-flex',
                                width: '100%',
                                paddingBottom: 20
                            }}>

                                <Button
                                    variant="contained"
                                    variant="contained"
                                    className={classes.btn}>
                                    Proceed to checkout
                            </Button>
                            </div>
                        </Link>
                        :
                        <Link to='/buy/payselect' style={{ textDecoration: 'none', width: '100%' }}>
                            <div style={{
                                justifyContent: 'center',
                                alignItems: 'center,',
                                display: 'inline-flex',
                                width: '100%',
                                paddingBottom: 20
                            }}>

                                <Button
                                    variant="contained"
                                    variant="contained"
                                    className={classes.btn}>
                                    Proceed to Payment
                            </Button>
                            </div>
                        </Link>
                    }
                </CardActions>
            </Card>
        </div >
    );
}