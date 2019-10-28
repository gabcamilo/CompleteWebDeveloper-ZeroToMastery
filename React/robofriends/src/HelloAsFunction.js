import React from 'react';

const HelloAsFunction = (props)=>{
		return(
			<div className='f1 tc'>
				<h1>'Hello World' from a function</h1>
				<p>{props.greeting}</p>
			</div>
		);
}

export default HelloAsFunction;