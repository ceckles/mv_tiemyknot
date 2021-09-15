import React, { useState } from 'react';

import {Item} from './Item';

export const ItemContainer = (props) => {

	console.log("PROPS IN ItemContainer ", props)
	return(
		<div>
			{
				props.items.map((item, idx) => {
					return (< Item key={idx} singleItem={item}/>)
				})
			}
		</div>
	)
}