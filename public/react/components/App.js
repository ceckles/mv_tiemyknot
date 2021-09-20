import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AddItem from "../pages/addItem";
import Registry from "../pages/registry";
import CreateRegistry from "../pages/createRegistry";
import Landing from "../pages/landing";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PersistentDrawerLeft from './AppBar';

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
	//

	//useEffect
	useEffect(() =>{
		fetchRegList();
	}, []);


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
		<PersistentDrawerLeft />	
		<div className="App">
		<Landing />
		</div>
		</div>
	);
}