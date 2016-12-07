/*jshint esversion: 6 */
import React from 'react';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username : "User Name",
			repoName : "Repo Name",
			repoLink : "Repo Link",
			repoDescr : "Repo Description",
			repoDate : "Repo Date",
			forks : "# of Forks",
			issues : "# of Issues",
			watchers : "# of Watchers",
			stargazers : "# of Stargazers"
		};

		//onAddInputChange - setState for each key
		//onAddSubmit
		_onInput(event){
			this.setState({
				username: event.target.value,
				repoName: event.target.value,
				repoLink: event.target.value,
				repoDescr: event.target.value,
				repoDate: event.target.value,
				forks: event.target.value,
				issues: event.target.value,
				watchers: event.target.value,
				stargazers: event.target.value
			});
		}

	}
	render () {
		return (

			);
	}
}
