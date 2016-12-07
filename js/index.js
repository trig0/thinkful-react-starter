require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';


document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Main title="This is the Main Title" />, document.getElementByID('app'))
		);