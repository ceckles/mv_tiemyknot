import React, { useState, useEffect } from 'react';

import { ItemContainer} from './ItemContainer'

export const App = () => {
	/*
	1st arg = what is the state element called?
	2nd arg = what function will update the state?

	*/
	const [sauces, setSauces]  = useState([]) //what do we want our default state to be?

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
			<h2>My super react site!</h2>
			<ItemContainer items={sauces} />
		</div>
	)
}