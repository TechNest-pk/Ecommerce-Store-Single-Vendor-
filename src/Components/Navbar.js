import React, { Component, Fragment } from 'react';

//React Router
import { Link, withRouter } from 'react-router-dom';

//Material UI
import { Grid, Container, Typography, AppBar, Toolbar, Button, Menu, Paper, Divider, List, ListItem, ListItemIcon, ListItemText, FormControl, OutlinedInput, InputAdornment, Avatar, IconButton, Badge, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

//Config
import { baseUrl } from '../Config/api';
import firebase from '../Config/Firebase';

//Axios
import axios from 'axios';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { FiGift, FiShoppingCart } from 'react-icons/fi';
import { FaMobileAlt, FaTshirt, FaFonticonsFi } from 'react-icons/fa';
import { GiBallerinaShoes } from 'react-icons/gi';
import { MdReceipt, MdRateReview } from 'react-icons/md';

// Components
import CategoriesButton from './CategoriesDropDown';
import DrawerMenu from './MobileMenuDrawer';

//Sweetalert
import swal from 'sweetalert2';

// Casecading Styleheet
import '../App.css';

const StyledBadge1 = withStyles(theme => ({
    badge: {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: 'rgb(255,0,131)'
    },
}))(Badge);

const styles = theme => ({
    root: {
        flexGrow: 1,
        '& input': {
            height: '0px',
            marginLeft: 30
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    iconButton: {
        // padding: 10,
        "&:hover": {
            backgroundColor: 'transparent',
        }
    },
    margin: {
        margin: theme.spacing(1),
    },
    webAppBar: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    mobileAppBar: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',

        }
    },
    // searchBarWeb: {
    //     display: 'none',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'block',
    //     }
    // },
    // searchBarMobile: {
    //     display: 'block',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //     },
    // },
    categoriesButton: {
        margin: 5,
        color: 'white',
        // fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'white',
            color: '#087059'
        },
    },
    navToolbar: {
        minHeight: 50,
        fontFamily: '"Noto Sans KR", sans-serif',
    },
    ListItemGroup: {
        listStyle: 'none',
        display: 'flex',
        // float: 'right'
        paddingTop: 0,
        paddingBottom: 0,
    },
    ListItem: {
        listStyle: 'none',
        color: '#666666',
        fontWeight: 'bold',
    },
    listItemIcon: {
        minWidth: 30,
    },
    loginBtn: {
        color: '#087059',
        fontSize: 18,

    },
    btn: {
        color: '#fff',
        backgroundColor: '#087059',
        height: 47,
        // width: 200,
        boxShadow: 'none',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#087059',
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'
        }

    },
    userbtn: {
        color: '#087059',
        textTransform: 'Capitalize',
        '&:hover': {
            color: '#666666',
            backgroundColor: 'transparent',
        }
    }
});

class Appbar extends Component {

    state = {
        keyword: '',
        user: {},
        appBarCategories: [],
        cartQuantity: null,
        anchorEl: false,
        isUserLoggedIn: false,
    }

    componentDidMount() {
        const { user } = this.props;

        this.getCategories();

        if (user) {
            this.setState({
                isUserLoggedIn: true,
            })
        }
        else {
            this.setState({
                isUserLoggedIn: false,
            })
        }
    }

    componentDidUpdate(prevProps) {
        const { user } = this.props;

        if (prevProps !== this.props) {
            if (user) {
                this.setState({
                    isUserLoggedIn: true,
                })
            }
            else {
                this.setState({
                    isUserLoggedIn: false,
                })
            }
        }
    }

    getCategories = () => {

        axios({
            url: `${baseUrl}categories/get-appbar-categories`,
            method: 'GET',
        })
            .then(response => {
                this.setState({
                    appBarCategories: response.data.data,
                })
            })
            .catch(err => {
                console.log('Something went wrong')
            })
    }

    handleLogout = () => {

        firebase.auth().signOut()
            .then(function () {
                window.location.replace('/');
            })
            .catch(function (error) {
            });
    }

    // getUser = (userId) => {
    //     axios({
    //         url: `${baseUrl}user/get-current-user`,
    //         method: "POST",
    //         data: { userId: userId }
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({
    //                 // username: response.data.data.name,
    //                 isUserLoggedIn: true,
    //             })
    //         })
    //         .catch(err => {
    //             //handle error
    //             console.log(err);
    //         });
    // }

    handleKeyPress(target, value) {
        const { history } = this.props;
        if (target.charCode == 13) {
            if (value.length > 0) {
                history.push(`/s/${value}`);
            }
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    renderAccountMenu = () => {
        const { classes, user, categories } = this.props;
        const { isUserLoggedIn, anchorEl, cartQuantity, keyword } = this.state;

        return (
            <div style={{ float: 'right' }}>
                <Link to='/cart'>
                    <IconButton className={classes.iconButton} >
                        <StyledBadge1 badgeContent={cartQuantity} color="primary">
                            <FiShoppingCart style={{ color: '#087059' }} />
                        </StyledBadge1>
                    </IconButton>
                </Link>
                <Button
                    className={classes.userbtn}
                    onClick={this.handleClick} style={{ marginRight: 0 }}>
                    Talha Khalid<ArrowDropDownIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{ marginTop: 40 }}
                >
                    <Typography variant="inherit">
                        <ListItem>
                            <Avatar
                                alt="Adelle Charles"
                            // src={photoURL}
                            />
                            <Grid style={{ marginLeft: 10 }}>
                                <Grid sm={12}>
                                    <Typography style={{ fontSize: 13 }} variant="caption">
                                        Hello,
                            </Typography>
                                </Grid>
                                <Grid sm={12}>
                                    <Typography style={{ fontWeight: 'bold' }} variant='body1'>
                                        {/* {displayName} */} Talha
                                </Typography>
                                </Grid>
                                <Grid sm={12}>
                                    <Link to='/user/profile'>
                                        <Typography variant="caption">
                                            View and edit profile
                                    </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </Typography>
                    <Divider />
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.root}
                    >
                        <Link to='/my-orders' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <MdReceipt style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="My Orders" />
                            </ListItem>
                        </Link>
                        {/* <Divider /> */}
                        <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <FiShoppingCart style={{ fontSize: 21, color: 'inherit' }} />
                                </ListItemIcon>
                                <ListItemText primary="My Cart" />
                            </ListItem>
                        </Link>
                        <Divider />
                        <ListItem onClick={this.handleLogout} button>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Menu>
            </div>
        )
    }

    renderNavigationList = () => {
        const { classes, user, categories } = this.props;
        const { isUserLoggedIn, anchorEl, cartQuantity, keyword, appBarCategories } = this.state;

        return (
            <Toolbar className={classes.navToolbar}>
                <CategoriesButton />
                <div style={{ width: '10%' }} />
                <div>
                    <List className={classes.ListItemGroup}>
                        {
                            appBarCategories.map((category, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <ListItem className={classes.ListItem}>
                                                <ListItemIcon className={classes.listItemIcon}>
                                                    <FaMobileAlt />
                                                </ListItemIcon>
                                                <ListItemText primary={category.name} />
                                            </ListItem>
                                        </Link>
                                    </Fragment>
                                )
                            })
                        }
                        {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem className={classes.ListItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <FaTshirt />
                                </ListItemIcon>
                                <ListItemText primary="Shirts" />
                            </ListItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem className={classes.ListItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <GiBallerinaShoes />
                                </ListItemIcon>
                                <ListItemText primary="Shoes" />
                            </ListItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem className={classes.ListItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <FiGift />
                                </ListItemIcon>
                                <ListItemText primary="Discounts" />
                            </ListItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem className={classes.ListItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <GiBallerinaShoes />
                                </ListItemIcon>
                                <ListItemText primary="Shoes" />
                            </ListItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem className={classes.ListItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <FiGift />
                                </ListItemIcon>
                                <ListItemText primary="Discounts" />
                            </ListItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem className={classes.ListItem}>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <FiGift />
                                </ListItemIcon>
                                <ListItemText primary="Discounts" />
                            </ListItem>
                        </Link> */}
                    </List>
                </div>
            </Toolbar>
        )
    }

    render() {
        const { classes, user } = this.props;
        const { isUserLoggedIn, anchorEl, cartQuantity, keyword } = this.state;

        return (
            <div className={classes.root}>
                <AppBar
                    className={classes.webAppBar}
                    style={{ backgroundColor: '#fff', fontFamily: '"Noto Sans KR", sans-serif', }}
                    // color='default'
                    position="fixed">
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Link style={{ textDecoration: 'none', marginRight: 10 }} to='/'>
                                <Typography variant="h5">
                                    <strong style={{ color: '#087059' }}>Ecommerce Store</strong>
                                </Typography>
                            </Link>
                            <FormControl variant="outlined" className="navCustom" style={{
                                width: '50%',
                                maxWidth: 600,
                                margin: '0px auto 0px'
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
                                            <Link style={{ textDecoration: 'none', color: '#087059' }} to={`/s/${this.state.keyword}`}><SearchIcon style={{ marginTop: 4 }} /></Link>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <div style={{
                                width: 200,
                            }}>
                                {isUserLoggedIn ?
                                    this.renderAccountMenu()
                                    :
                                    // <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                                    //     <strong className={classes.loginBtn}>Login</strong>
                                    // </Link>
                                    <Button
                                        variant="contained"
                                        className={classes.btn}
                                        onClick={() => { this.props.history.push('/login') }}
                                    >
                                        Login
                                </Button>
                                }
                            </div>
                        </Toolbar>
                        {this.renderNavigationList()}

                    </Container>
                </AppBar>
                <AppBar
                    className={classes.mobileAppBar}
                    style={{ backgroundColor: '#fff', fontFamily: '"Noto Sans KR", sans-serif', }}
                    // color='default'
                    position="fixed">
                    <Container maxWidth="md">
                        <DrawerMenu />
                        <Typography
                            variant="h6"
                            onClick={() => this.props.history.push('/')}
                            style={{
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                display: 'inline-block',
                                width: '80%',
                                color: '#087059',
                                fontWeight: "bold",
                            }}>
                            Ecommerce Store
                        </Typography>
                    </Container>
                </AppBar>

            </div >
        );
    }

}

export default withRouter(withStyles(styles)(Appbar));
