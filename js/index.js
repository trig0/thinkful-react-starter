/*jshint esversion: 6 */
require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';
import Main from './components/main';

const sampleData = {
	username: "Username",
	url: "URL"
};

render(
  <Main title={sampleData.username}/>, document.getElementById('app'));

// document.addEventListener('DOMContentLoaded', () =>
// 	ReactDOM.render(<Main />,
// 	document.getElementByID('app'))
// );
