import React from 'react';
import Card from './Card';

const Cardlist = ( {Info} ) => {

	const Cardarray = Info.map( (user,index) =>
	      {return(  
	      	<Card 
	      	key={index} 
	      	id = {Info[index].id} 
	      	name={Info[index].name} 
	      	email={Info[index].email} 
	      	/>
	      	);
		
			}		
			)

	return(
			<div>    
			{Cardarray};
			</div>
						);
							}

		export default Cardlist;
	