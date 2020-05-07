import React, { Component } from 'react';

//React Router
import { withRouter, Link } from 'react-router-dom';

//Material UI
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography, Button, Dialog, Divider, AppBar, Toolbar, IconButton, Slide, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { FaRegUserCircle, FaMobileAlt, FaTshirt } from 'react-icons/fa';
import { MdReceipt, MdRateReview } from 'react-icons/md';
import { GiHelp, GiBallerinaShoes } from 'react-icons/gi';
import { FiGift, FiSettings, FiShoppingCart } from 'react-icons/fi';

// Casecading Styleheet
import '../App.css';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    listItem: {
        backgroundColor: '#fff',
        color: '#666666',
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
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

class Drawer extends Component {

    state = {
        open: false,
        keyword: '',
        isUserLoggedIn: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleKeyPress = (target, value) => {

        if (target.charCode == 13) {
            if (value.length > 0) {
                this.props.history.push(`/s/${value}`);
            }
        }
    }

    handleButtonPress = (path) => {
        this.props.history.push(path);
        this.handleClose();
    }

    render() {
        const { classes } = this.props;
        const { open, keyword, isUserLoggedIn } = this.state;

        return (
            <React.Fragment>
                <IconButton edge="start" color="black" onClick={this.handleClickOpen} aria-label="close">
                    <MenuIcon />
                </IconButton>
                <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar} style={{ backgroundColor: '#fff', fontFamily: '"Noto Sans KR", sans-serif', }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                onClick={() => this.props.history.push('/')}
                                style={{
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    display: 'inline-block',
                                    width: '80%',
                                    color: '#666666',
                                    fontWeight: "bold",
                                }}>
                                Ecommerce Store
                        </Typography>
                            <IconButton edge="start" color="black" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <React.Fragment>
                        <FormControl variant="outlined" className="navCustom" style={{
                            width: '80%',
                            maxWidth: '100%',
                            margin: '0px auto 0px',
                            marginTop: 10
                        }}>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                className="MuiOutlinedInput MuiOutlinedInput-notchedOutline"
                                placeholder="Search.."
                                value={keyword}
                                onChange={e => this.setState({ keyword: e.target.value })}
                                onKeyPress={e => this.handleKeyPress(e, e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Link style={{ textDecoration: 'none', color: '#087059' }} to={`/s/${keyword}`}>
                                            <SearchIcon style={{ marginTop: 4 }} />
                                        </Link>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div style={{ height: 10 }} />
                        <List
                            component="nav"
                            subheader={
                                <ListSubheader component="div" style={{ position: 'relative' }}>
                                    Popular Searches
                            </ListSubheader>
                            }>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <FaMobileAlt style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="SmartPhones" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <FaTshirt style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Clothes" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <GiBallerinaShoes style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Shoes" />
                            </ListItem>
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <FiGift style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Discounts" />
                            </ListItem>
                            <ListItem style={{ padding: 0, paddingRight: 10 }}>
                                <ListItemText
                                    style={{ margin: 0, }}
                                    primary={
                                        <span
                                            onClick={() => { this.handleButtonPress('/categories') }}
                                            style={{ float: 'right', display: 'block', fontSize: 14, color: '#087059' }}>
                                            See all Categories
                                        </span>
                                    } />
                            </ListItem>
                        </List>
                        <Divider />
                        {isUserLoggedIn &&
                            <List component="nav">
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <FaRegUserCircle style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Account" />
                                </ListItem>
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <MdReceipt style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Orders" />
                                </ListItem>
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <FiShoppingCart style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Cart" />
                                </ListItem>
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <MdRateReview style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="My Reviews" />
                                </ListItem>
                            </List>
                        }
                        <Divider />
                        <List
                            component="nav"
                            subheader={
                                <ListSubheader component="div" style={{ position: 'relative', top: 0, zIndex: 1, }}>
                                    Help & Settings
                        </ListSubheader>
                            }>
                            {isUserLoggedIn &&
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <FiSettings style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Account Settings" />
                                </ListItem>
                            }
                            <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                    <GiHelp style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="Help" />
                            </ListItem>
                            {isUserLoggedIn ?
                                <ListItem button className={classes.listItem} onClick={() => { this.handleButtonPress('/') }}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <ExitToAppIcon style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" />
                                </ListItem>
                                :
                                <div
                                    style={{
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        width: '100%',
                                        display: 'inline-flex'
                                    }}>
                                    <Button
                                        variant="contained"
                                        style={{
                                            color: '#fff',
                                            backgroundColor: '#087059',
                                            width: '80%',
                                            marginTop: 50
                                        }}>Login</Button>
                                </div>
                            }
                        </List>
                    </React.Fragment>
                </Dialog>
            </React.Fragment>
        );
    }
}
export default withRouter(withStyles(styles)(Drawer));