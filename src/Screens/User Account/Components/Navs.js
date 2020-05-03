import React from 'react';

// React Router
import { Link } from 'react-router-dom';

//Material UI
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Icons
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdReceipt, MdRateReview } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';

export default function Navs(props) {

    const classes = styles();

    return (
        <div>
            <List>
                <Link to="/user/profile" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={props.path === 'profile' ? classes.listItemActive : classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                            <FaRegUserCircle style={{ fontSize: 21, color: 'inherit' }} />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItem>
                </Link>
                <Link to="/user/change-password" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={props.path === 'change-password' ? classes.listItemActive : classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                            <VpnKeyIcon style={{ fontSize: 21, color: 'inherit' }} />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" />
                    </ListItem>
                </Link>
                <Link to="/user/orders" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={props.path === 'orders' ? classes.listItemActive : classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                            <MdReceipt style={{ fontSize: 21, color: 'inherit' }} />
                        </ListItemIcon>
                        <ListItemText primary="My Orders" />
                    </ListItem>
                </Link>
                <Link to="/user/reviews" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={props.path === 'reviews' ? classes.listItemActive : classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                            <MdRateReview style={{ fontSize: 21, color: 'inherit' }} />
                        </ListItemIcon>
                        <ListItemText primary="My Reviews" />
                    </ListItem>
                </Link>
                <Link to="/help" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                            <GiHelp style={{ fontSize: 21, color: 'inherit' }} />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}

const styles = makeStyles(theme => ({
    profileNavHeading: {
        listStyle: 'none',
        textDecoration: 'none',
        color: '#008081',
        fontSize: '21px',
        marginBottom: '20px',
    },
    profileNav: {
        listStyle: 'none',
        textDecoration: 'none',
        color: '#474747',
        fontSize: '17px',
        margin: '5px',
        cursor: 'pointer'
    },
    listItem: {
        backgroundColor: '#fff',
        color: '#666666',
        margin: 3,
        '&:hover': {
            backgroundColor: '#087059',
            color: '#fff',
        },
    },
    listItemActive: {
        margin: 3,
        backgroundColor: '#087059',
        color: '#fff',
    }
}));