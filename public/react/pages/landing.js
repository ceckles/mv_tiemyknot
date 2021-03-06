import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';
import ringLogo from './img/ring.png';

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logo: {
    maxWidth: "25%",
    height: "auto",
    '&:hover': {
      transform: "scaleX(-1)"
   },
  },
}));

export const Landing = () => {
  //use styles
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
      <img src={ringLogo} alt="Ring" className={classes.logo}/>
        <Grid item ><Box m={2}><Typography variant="h1" color='primary'>Tie My Knot</Typography></Box></Grid>
        <Grid item><Box m={2}><Link to="/registry" style={{textDecoration:'none'}}><Button variant="contained" color="primary">View Registries</Button></Link></Box></Grid>
        <Grid item ><Box m={2}><Link to="/createRegistry" style={{textDecoration: 'none'}}><Button variant="contained" color="primary">Create A Registry</Button></Link></Box></Grid>
      </Grid>
    </div>
  );
};

//export
//export default Landing;
