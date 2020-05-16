import React from 'react';

const Card = ({name,email,id}) => {
			return(
					<div className = 'tc  dib ba bw2 b--gold br3  pa1 ma2  grow '>						
					<img alt='img' src={`https://robohash.org/${id}`}className ='w-30' />						 
					<div>
					<h2> {name} </h2>
					<p> {email} </p>	
					</div>
					</div>	
				            );
					           }

					 export default Card;
