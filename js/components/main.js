/*jshint esversion: 6 */
import React, { Component } from 'react';

function Input(props) {
	//make this a form with the input passing to the URL
	let query;

	function submitForm(e){
		e.preventDefault();
		props.getAPI(query.value);
	}

	return (

			<form onSubmit={submitForm}>
				<input type='text' ref={(textInput) => {query = textInput; }}/>
				<button>{props.buttonText}</button>
			</form>
	)

}

function Repo(props) {

	return (
		<div>
			<h1>{props.name}</h1>
			<p>{props.description}</p>
		</div>
	)
}

export default class Main extends Component {
    constructor(props) {
        super(props);
        this._fetchAPI = this._fetchAPI.bind(this);
        // this._onInput = this._onInput.bind(this);
        this.state = {
            repos: [{}],
            textInput: ''
        };

    }

    //fetch function
    _fetchAPI(textInput) {
				console.log(textInput);
        let URL = 'https://api.github.com/users/' + textInput + '/repos';
        fetch(URL).then((response) => {
                return response.json();
            })
            .then((body) => {
                console.log(body);
                // return body;
                this.setState({
                    repos: body
                });
            });
    }

    // _onInput(event){

    // }

    //render function
    render() {

        return (
        	<div>
        	<Input getAPI={this._fetchAPI} buttonText={'Submit me!'} />
            <ul>{this.state.repos.map((repo, i) => {
            	//return <li key={i}>{repo.name}</li>;
							return <Repo name={repo.name} description={repo.description} key={i}/>
            })}
					</ul>
            </div>
        );
    }
}
