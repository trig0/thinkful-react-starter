/*jshint esversion: 6 */
import React, { Component } from 'react';
import Input from './input';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this._fetchAPI = this._fetchAPI.bind(this);
		this._onInput = this._onInput.bind(this);
		this.state = {
			body: []
		};

	}

	//fetch function
	_fetchAPI() {
		const URL = 'https://api.github.com/users/octocat/repos';
		fetch(URL).then((response) => {
			return response.json();
		})
		.then((body) => {
			console.log(body);
			return body;
		});
	}

	_onInput(event){
		this.setState({
			body: body
		});
	}

	//render function
	render() {
		return (
			<div>
				<p>This is the body</p>
				{this._fetchAPI()}
				<Input data={this.body.name}  />
			</div>
			);
	}
}
