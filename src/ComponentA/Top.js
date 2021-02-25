
import PrimarySearchAppBar from './controls/PrimarySearchAppBar'
import React, { useState } from 'react';
import MapUse from './MapUse'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TableChartIcon from '@material-ui/icons/TableChart';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TableEmployee from '../ComponentA/Table/TableEmployee';
import { Route, Switch, Redirect } from "react-router-dom";
import UseCard from './UserCard';
import { Grid, Paper } from '@material-ui/core';
import DashBoard from './controls/DashBoard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Notification from './Notification';
import IconDisplay from './IconDisplay';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper1: {
        height: 500,
        width: 300,
    },
    paper2: {
        marginTop:'2rem',
        height: 500,
        width: 900,
    },
}));
export default function Top() {

    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [name, setName] = React.useState();
    const [spacing, setSpacing] = React.useState(2);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setName(event.target.name);
    };
    return (
        <>
            <PrimarySearchAppBar />
            <Grid item xs={12}>
                <Grid container justify="left" spacing={spacing}>
                    <Grid key="1" item>
                        <Paper className={classes.paper1}>
                            <div className={classes.root}>
                                <List component="nav" aria-label="main mailbox folders">

                                    <ListItem
                                        button
                                        selected={selectedIndex === 0}
                                        name="profile"
                                        onClick={(event) => handleListItemClick(event, 0)}
                                    >
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="DashBoard" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        selected={selectedIndex === 1}
                                        name="profile"
                                        onClick={(event) => handleListItemClick(event, 1)}
                                    >
                                        <ListItemIcon>
                                            <PersonOutlineIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="User Profile" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        selected={selectedIndex === 2}
                                        name="table"
                                        onClick={(event) => handleListItemClick(event, 2)}
                                    >
                                        <ListItemIcon>
                                            <TableChartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Table List" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        selected={selectedIndex === 3}
                                        name="icon"
                                        onClick={(event) => handleListItemClick(event, 3)}
                                    >
                                        <ListItemIcon>
                                            <AppsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Icon" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        selected={selectedIndex === 4}
                                        name="map"
                                        onClick={(event) => handleListItemClick(event, 4)}
                                    >
                                        <ListItemIcon>
                                            <RoomIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Map" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        selected={selectedIndex === 5}
                                        name="notification"
                                        onClick={(event) => handleListItemClick(event, 5)}
                                    >
                                        <ListItemIcon>
                                            <NotificationsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Notification" />
                                    </ListItem>
                                </List>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid key="2" item>
                        <Paper className={classes.paper2}>
                            <div>
                                <Route path="/" exact render={() => (selectedIndex == '0' ? <DashBoard /> : (<Redirect to='/' />))} />
                                <Route path="/" exact render={() => (selectedIndex == '1' ? <UseCard /> : (<Redirect to='/' />))} />
                                <Route path="/" exact render={() => (selectedIndex == '2' ? <TableEmployee /> : (<Redirect to='/' />))} />
                                <Route path="/" exact render={() => (selectedIndex == '3' ? <IconDisplay /> : (<Redirect to='/' />))} />
                                <Route path="/" exact render={() => (selectedIndex == '4' ? <MapUse /> : (<Redirect to='/' />))} />
                                <Route path="/" exact render={() => (selectedIndex == '5' ? <Notification /> : (<Redirect to='/' />))} />
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}