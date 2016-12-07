/*jshint esversion: 6 */
import React, { Component } from 'react';

function Input(props) {
	//make this a form with the input passing to the URL
	return <button onClick={props.getAPI}>{props.buttonText}</button>

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
    _fetchAPI() {
        const URL = 'https://api.github.com/users/octocat/repos';
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
            <p>{this.state.repos.map((data) => {
            	(data);
            })
        }
            </p>
            </div>
        );
    }
}
