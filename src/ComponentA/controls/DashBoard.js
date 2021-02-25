import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LineChart from '../Chart/LineChart'
import BarChart from '../Chart/BarChart'
import DoughnutChart from '../Chart/DoughnutChart'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    wight:450,
    height:200
  },
}));
export default function DashBoard(){  
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {/*<FormRow />*/}
          <Grid item xs={6}>
          <Paper className={classes.paper}><LineChart/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><BarChart/></Paper>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          {/*<FormRow />*/}
          <Grid item xs={6}>
          <Paper className={classes.paper}><DoughnutChart/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        </Grid>
      </Grid>
    </div>
    )
}