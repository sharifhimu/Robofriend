import React from 'react';

const Searchbox = ({searchchange}) =>{
	return (
			<div className = 'tc pa2'>
			<input className = 'bw1 pa2 b--navy br3'
			 type='Search'
			 placeholder = 'Search here' 
			 onChange = {searchchange}
			 />
			 </div>
		);
}

export default Searchbox;