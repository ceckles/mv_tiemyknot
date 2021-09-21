import React, { useState } from 'react';
import { makeStyles, theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const RegistryList = (props) => {
	  //use styles
	  const classes = useStyles();

	return(
		<div>
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