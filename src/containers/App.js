import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';


const mapstateToProps = state => {
	return{
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchchange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}


class App extends Component {

	





componentDidMount(){

				this.props.onRequestRobots();
					
					}

render(){
		
		const {searchfield, onSearchchange, robots, isPending} = this.props;

		const filteredInfo = robots.filter(info => {
		return info.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	
		return isPending ?
			 <h1>wait a minute</h1> :			
		(
			<div>
			
			<h1 className = 'tc f2'>Robofriends</h1>
			<Searchbox searchchange = {onSearchchange}/>
			
			<Scroll>
			<ErrorBoundry>
			<Cardlist Info = {filteredInfo}/>
			</ErrorBoundry>
			</Scroll>
			
			</div>			
				);
					}
	   			      }
									


     export default connect(mapstateToProps, mapDispatchToProps)(App);