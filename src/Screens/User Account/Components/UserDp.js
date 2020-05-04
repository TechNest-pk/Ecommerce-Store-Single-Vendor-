import React from 'react';

// React Router
import { Link } from 'react-router-dom';

//Material UI
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Asstes
import img from '../../../Assets/Images/userDpAvatar.jpg'

export default function Navs(props) {

    const classes = styles();

    return (
        <div className={classes.imageDiv}>
            <img src={img} alt="My Profile Picture" className={classes.dpForDesktop} />
        </div>
    )
}

const styles = makeStyles(theme => ({
    imageDiv: {
        paddingTop: 12,
        height: 222,
        width: '100%',
        maxWidth: 223,
        margin: '0px auto 0px',
        // borderRadius: '50%',
        // border: '1px solid black',
        // borderStyle: 'border-box'
    },
    dpForDesktop: {
        width: '100%',
        height: '100%',
    }
}));