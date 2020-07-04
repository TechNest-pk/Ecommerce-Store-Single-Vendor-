import React from 'react';
//Material UI
import { Typography, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HouseIcon from '@material-ui/icons/House';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


// const styles = makeStyles(theme => ({

// }));

const serviceInfo = props => {

    const { user } = props;
    // const classes = styles();

    return (
        <div style={{ backgroundColor: '#fafafa' }}>
            <div>
                <Typography style={{ paddingTop: '20px', paddingLeft: '20px', fontWeight: 'bold', marginBottom: 5 }} component="h6">Delivery Options</Typography>
                <ListItem>
                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                        <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText secondary={
                        <React.Fragment>
                            {
                                user ? <Typography component="p" variant="p" color="textPrimary">
                                    {user.address}
                                </Typography>
                                    :
                                    <Typography component="p" variant="p" color="textPrimary">
                                        Sindh, Karachi - Gulshan-e-Iqbal, Block 15
                                                        </Typography>
                            }
                        </React.Fragment>}
                    />
                </ListItem>
                <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                <ListItem>
                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                        <HouseIcon />
                    </ListItemIcon>
                    <ListItemText secondary={
                        <React.Fragment>
                            <Typography component="p" variant="p" color="textPrimary" style={{ marginTop: 10 }}>
                                Home Delivery
                                            </Typography>
                            {/* ye dekhna hai bad me */}
                            <span style={{ fontSize: '12px', color: '#9e9e9e' }}>1 to 3 days</span>
                        </React.Fragment>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText secondary={
                        <React.Fragment>
                            <Typography
                                component="p"
                                variant="p"
                                color="textPrimary"
                            >
                                Cash on Delivery Available
                                                </Typography>
                        </React.Fragment>}
                    />
                </ListItem>
            </div>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <div>
                <Typography style={{ paddingTop: '20px', paddingLeft: '20px', fontWeight: 'bold' }} component="h6">Return & Warranty</Typography>
                <ListItem>
                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                        <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText secondary={
                        <React.Fragment>
                            <Typography component="p" variant="p" color="textPrimary">
                                100% Authentic
                                            </Typography>
                        </React.Fragment>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                        <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText secondary={
                        <React.Fragment>
                            <Typography component="p" variant="p" color="textPrimary" style={{ marginTop: 10 }}>
                                14 days easy return
                                            </Typography>
                            <span style={{ fontSize: '12px', color: '#9e9e9e' }}>Change of mind is not applicable</span>
                        </React.Fragment>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon style={{ minWidth: '40px', width: '40px' }}>
                        <VerifiedUserIcon style={{ color: 'green' }} />
                    </ListItemIcon>
                    <ListItemText secondary={
                        <React.Fragment>
                            <Typography component="p" variant="p" color="textPrimary">
                                {/* {prod.warranty} */} 1 Year
                                                </Typography>
                        </React.Fragment>}
                    />
                </ListItem>
                <br />
            </div>
        </div>
    );
}

export default serviceInfo;