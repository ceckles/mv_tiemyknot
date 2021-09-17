import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AddItem from "../pages/addItem";
import Registry from "../pages/registry";
import CreateRegistry from "../pages/createRegistry";
import Landing from "../pages/landing";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PersistentDrawerLeft from './AppBar';

//Styles
const useStyles = makeStyles((theme) => ({
}));

export const App = () => {
	const classes = useStyles();

	async function fetchSauces() {
  		try {
  			const response = await fetch('http://localhost:3000/sauces');
  			const responseJSON = await response.json()

  			console.log("WHAT IS OUR RES? ", responseJSON);	

  			setSauces(responseJSON.sauces)
  		} catch(err) {
  			console.log("OH NO AN ERROR! ", err)
  		}
  	} 
  
	//takes a callback function, where we put our fetch!
  	useEffect(() => {
  		fetchSauces()
  	}, []) //pass an empty array to run just once!

	//return everything in nested pair of tags
	return(
		<div>
		<PersistentDrawerLeft />	
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
		<a href="/index">Landing</a>
		</div>
		</Router>
		</div>
	);
}