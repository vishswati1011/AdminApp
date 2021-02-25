import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AppleIcon from '@material-ui/icons/Apple';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import TableChartIcon from '@material-ui/icons/TableChart';
import SearchIcon from '@material-ui/icons/Search';

import SendIcon from '@material-ui/icons/Send';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
}));
const data = {
    datasets: [
        { id: '0', name: <AcUnitIcon /> },
        { id: '1', name: <AccessAlarmIcon /> },
        { id: '2', name: <AccountBalanceIcon /> },
        { id: '3', name: <AccountBalanceWalletIcon /> },
        { id: '4', name: <AccountCircleIcon /> },
        { id: '5', name: <AddIcCallIcon /> },
        { id: '6', name: <AppleIcon /> },
        { id: '7', name: <DashboardIcon /> },
        { id: '8', name: <AddCircleIcon /> },
        { id: '9', name: <NotificationsIcon /> },
        { id: '10', name: <CloseIcon /> },
        { id: '11', name: <RoomIcon /> },
        { id: '12', name: <PersonIcon /> },
        { id: '13', name: <SentimentVerySatisfiedIcon/> },
        { id: '14', name: <ListIcon/> },
        { id: '15', name: <TableChartIcon/> },
        { id: '16', name: <TableChartIcon/> },
        { id: '17', name: <SearchIcon/> },
        { id: '18', name: <SendIcon/> },
    ]
}
export default function IconDisplay() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>    
        {
            data.datasets.map(dataset => 
                <Grid item xs={3}>
            <Paper className={classes.paper}>{dataset.name}</Paper>
            </Grid>)
        }     
        </Grid>
    )
}