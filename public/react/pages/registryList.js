import React, { useState } from 'react';
import { makeStyles, theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: '100%',
		minHeight: '100vh',
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	  },
}));

const RegistryList = (props) => {
	  //use styles
	  const classes = useStyles();
 
	return(
		<div className={classes.root} align="center">
		<br/><br/><br/><br/>
		{
			
			props.registryData.map((registry, idx) => {
				console.log(registry);
				return(<div key={idx}><strong>{registry.groomName}, {registry.brideName}</strong></div>)
			})
		}
		</div>
	)
}
export default RegistryList;