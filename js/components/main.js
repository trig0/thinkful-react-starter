import React from 'react';
import Input from './components/input';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.fetchAPI = this.fetchAPI.bind(this);
	}

	//fetch function
	fetchAPI() {
		return fetch()
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
