import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import {MainPage} from "./MainPage";
import {MainOne} from "./MainOne";

class App extends React.Component {
	render() {
		return (
			<div>
				<div>
					你好
				</div>
				<Router>
					<div className="App">
						<Switch>
							<Redirect exact strict from='/xx' to='/main'/>
							<Route path='/main' component={MainPage}/>
							<Route path='/main/one' component={MainOne}/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
