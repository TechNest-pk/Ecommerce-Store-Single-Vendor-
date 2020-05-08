import React from 'react';

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

export default function CustomizedExpansionPanels(props) {

    const [expanded, setExpanded] = React.useState('panel1');
    const classes = useStyles();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Collapsible Group Item #1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List component="nav">
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
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List component="nav">
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
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List component="nav">
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
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
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
    },
}))(MuiExpansionPanelDetails);
