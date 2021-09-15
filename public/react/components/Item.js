import React from 'react';

export const Item = (props) => {

	console.log("PROPS IN ITEM ", props );

	return <img className="item-img" src={props.singleItem.image} />

}