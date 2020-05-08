import React, { Component } from 'react';

//React Router
import { withRouter, Link } from 'react-router-dom';

//Material UI
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography, Button, Dialog, Divider, AppBar, Toolbar, IconButton, Slide, FormControl, OutlinedInput, InputAdornment } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { FaRegUserCircle, FaMobileAlt, FaTshirt } from 'react-icons/fa';
import { MdReceipt, MdRateReview } from 'react-icons/md';
import { GiHelp, GiBallerinaShoes } from 'react-icons/gi';
import { FiGift, } from 'react-icons/fi';

//Components
import CategoriesPanel from './CategoriesExpansionPanel';

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

    state={
        open: true,

    }

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <React.Fragment>
                <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar} style={{ backgroundColor: '#fff', fontFamily: '"Noto Sans KR", sans-serif', }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                style={{
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    display: 'inline-block',
                                    width: '80%',
                                    color: '#666666',
                                    fontWeight: "bold",
                                }}>
                                Categories
                        </Typography>
                            <IconButton edge="start" color="black" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <CategoriesPanel />
                </Dialog>
            </React.Fragment>
        );
    }
}
export default withRouter(withStyles(styles)(Drawer));