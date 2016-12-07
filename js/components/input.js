/*jshint esversion: 6 */
import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props)
		}
	
			//onAddSubmit


	
	render () {
	console.log("input props", this.props.body)
		return (
			<div>This is from input.js</div>
			)
	}
}
