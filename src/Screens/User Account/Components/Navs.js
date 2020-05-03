import React from 'react';

// React Router
import { Link } from 'react-router-dom';

//Material UI
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdReceipt, MdRateReview } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';


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
    }
}));


export default function Navs(props) {

    const classes = styles();

    return (
        <div>
            <List>
                <Link to="/user" style={{ textDecoration: 'none', color: '#666666' }} onClick={() => { props.renderProfile() }}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                            <FaRegUserCircle style={{ fontSize: 21 }} />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItem>
                </Link>
                <Link to="/user" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                            <VpnKeyIcon style={{ fontSize: 21 }} />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" />
                    </ListItem>
                </Link>
                <Link to="/user" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                            <MdReceipt style={{ fontSize: 21 }} />
                        </ListItemIcon>
                        <ListItemText primary="My Orders" />
                    </ListItem>
                </Link>
                <Link to="/user" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                            <MdRateReview style={{ fontSize: 21 }} />
                        </ListItemIcon>
                        <ListItemText primary="My Reviews" />
                    </ListItem>
                </Link>
                <Link to="/user" style={{ textDecoration: 'none', color: '#666666' }}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                            <GiHelp style={{ fontSize: 21 }} />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                </Link>
            </List>
        </div>
    )
}