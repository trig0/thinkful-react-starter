/*jshint esversion: 6 */
import React from 'react';
import Input from './components/input';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.fetchAPI = this.fetchAPI.bind(this);

	}

	//fetch function

	_fetchAPI() {
		const URL = 'https://api.github.com/users';
		fetch(URL).then(function(response){
			return response.json();
		});
	}

	//render function
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
			);
	}
}
