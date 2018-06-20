import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function optionFunc() {

	console.log('optionFunc')
}

ReactDOM.render(
	<BrowserRouter getUserConfirmation={optionFunc}>
			<App/>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();