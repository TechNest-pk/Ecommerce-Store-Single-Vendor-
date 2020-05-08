import React from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Material UI
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//Icons
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { FaRegUserCircle, FaMobileAlt, FaTshirt } from 'react-icons/fa';
import { MdReceipt, MdRateReview } from 'react-icons/md';
import { GiHelp, GiBallerinaShoes } from 'react-icons/gi';
import { FiGift, } from 'react-icons/fi';

function App(props) {

    const [expanded, setExpanded] = React.useState(null);
    const classes = useStyles();
    const categories = props.categories;

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleButtonPress = (path) => {
        props.history.push(path);
        props.hideDrawer();
    };

    return (
        <div>
            {
                categories.map((val, index) => {
                    return (
                        <ExpansionPanel square expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                            <ExpansionPanelSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                                <ListItem button className={classes.listItem}>
                                    <ListItemIcon style={{ minWidth: '40px', width: '40px', color: 'inherit' }}>
                                        <FaMobileAlt style={{ fontSize: 21, color: 'inherit' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Mobile Phones" />
                                </ListItem>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List component="nav">
                                    <ListItem button className={classes.listItems} onClick={() => { handleButtonPress('/') }}>
                                        <ListItemText primary="Samsung" />
                                    </ListItem>
                                    <ListItem button className={classes.listItems} onClick={() => { handleButtonPress('/') }}>
                                        <ListItemText primary="Apple" />
                                    </ListItem>
                                    <ListItem button className={classes.listItems} onClick={() => { handleButtonPress('/') }}>
                                        <ListItemText primary="Oppo" />
                                    </ListItem>
                                    <ListItem button className={classes.listItems} onClick={() => { handleButtonPress('/') }}>
                                        <ListItemText primary="Google" />
                                    </ListItem>
                                </List>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })
            }
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    listItem: {
        color: '#666666',
        '&:hover': {
            backgroundColor: '#087059',
            color: '#fff',
        },
    },
    listItems: {
        color: '#666666',
        width: '100%',
    },
    listItemActive: {
        margin: 3,
        backgroundColor: '#087059',
        color: '#fff',
    }
}));

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'block'
    },
}))(MuiExpansionPanelDetails);

export default withRouter(App);