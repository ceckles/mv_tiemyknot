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
    bgcolor: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
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
	const [registryList, setRegistryList] = useState([]);



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
  			setRegistryList(responseJSON.registry)
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
        <Route path="/registry">
              <RegistryList  RegistryList={registryList}/>
        </Route>
		<Route exact path="/">
		<Landing />
  		</Route>
		</div>
	);
}
