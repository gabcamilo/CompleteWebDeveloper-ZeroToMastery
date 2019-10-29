import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{

	if(true){
		throw new Error('NOOOOOOOO');
	}
	return (
		<div>
			{
				robots.map((robot)=>{
				const {id, name, email} = robot;
				return (
					<Card
						key={id}
						id={id}
						name ={name}
						email={email}
					/>
				)
			})
		}
		</div>
	);
}
export default CardList;