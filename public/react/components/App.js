import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AddItem from "../pages/addItem";
import Registry from "../pages/registry";
import CreateRegistry from "../pages/createRegistry";
import Landing from "../pages/landing";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//Styles
const useStyles = makeStyles((theme) => ({
	root: {
		background: 'linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)',
		minWidth: '100%',
		minHeight: '100vh',
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	  },
}));

export const App = () => {
	//Theme
	const classes = useStyles();

	//useState
	const [registry, setRegistry] = useState([]);
	const [showReg, setShowReg] = useState(false);

	//useEffect
	useEffect(() =>{
		fetchRegList();
	}, []);


	function handleShowReg(){
		//Switch the show of Registry
		setShowReg(!showReg);
	}
	async function fetchRegList() {
  		try {
  			const response = await fetch('http://localhost:3000/registry');
  			const responseJSON = await response.json()

  			console.log("WHAT IS OUR RES? ", responseJSON);	

  			setRegistry(responseJSON.sauces)
  		} catch(err) {
  			console.log("OH NO AN ERROR! ", err)
  		}
  	} 
  
	//takes a callback function, where we put our fetch!
  	useEffect(() => {
  		fetchRegList()
  	}, []) //pass an empty array to run just once!

	//return everything in nested pair of tags
	return(
		<div>
		<Router>
		<div className="App">
		<Switch>
		<Route exact path='/addItem' component={AddItem} />
		<Route exact path='/registry' component={Registry} />
		<Route exact path='/createRegistry' component={CreateRegistry} />
		<Route exact path='/index' component={Landing} />
		</Switch>
		<a href="/registry">Registry </a>
		<a href="/createRegistry">Create Registry </a>
		<a href="/addItem">Add Item</a>
		<a href="/">Landing</a>
		</div>
		</Router>
		{showReg
			? (<Registry />) 
			: (
				<div className={classes.root}>
				<Grid container direction="column" justifyContent="center" alignItems="center">
				<Grid item ><Box m={2}><Typography variant="h1" color='primary'>Tie My Knot</Typography></Box></Grid>
				<Grid item><Box m={2}><Button variant="contained" color="primary" onClick={handleShowReg}>View A Registry</Button></Box></Grid>
				<Grid item ><Box m={2}><Button variant="contained" color="primary" >Create A Registry</Button></Box></Grid>
			  	</Grid>
				</div>
			)
		}
		</div>
	);
}