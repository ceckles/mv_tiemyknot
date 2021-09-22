import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddItem from "../pages/addItem";
import Registry from "../pages/registry";
import CreateRegistry from "../pages/createRegistry";
import Landing from "../pages/landing";
import RegistryList from "../pages/registryList";

import { Route } from 'react-router-dom'
import PersistentDrawerLeft from './AppBar';


//Styles
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

export const App = () => {
  //Theme
  const classes = useStyles();


	//useState
	const [registryData, setRegistryData] = useState([]);



  //useEffect
  useEffect(() => {
    fetchRegList();
  }, []);

  function handleShowReg() {
    //Switch the show of Registry
    setShowReg(!showReg);
  }

	async function fetchRegList() {
  		try {
  			const response = await fetch('http://localhost:3000/registry');
  			const responseJSON = await response.json()
  			console.log("WHAT IS OUR RES? ", responseJSON);	
  			setRegistryData(responseJSON.registry)
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
		<div className="App">
		<PersistentDrawerLeft />

        <Route path="/createRegistry">
          <CreateRegistry />
        </Route>
        <Route path="/addItem">
              <AddItem />
        </Route>
        <Route exact path="/registry/:id" >
              <Registry />
        </Route>
        
        <Route exact path="/registry">
              <RegistryList  registryData={registryData}/>
        </Route>
		<Route exact path="/">
		<Landing />
  		</Route>
		</div>
	);
}
  