import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import {MainPage} from "./MainPage";
import {PageOne} from "./MainOne";
import ScrollToTop from './ScrollToTop'
import {PageTwo} from "./MainTwo";

class AsideBar extends React.Component {
	
	gotoPageTwo = ()=>{
	
		this.props.history.push('/two')
	}
	
	gotoPageOne = ()=>{
		
		this.props.history.push('/one')
	}
	
	render() {
		return (
			<div>
				<div onClick={this.gotoPageOne}>分页1</div><div onClick={this.gotoPageTwo}>分页2</div>
			</div>
		)
	}
}

const AsideBarWithRouter = withRouter(AsideBar)

class App extends React.Component {
	render() {
		return (
			<div>
				<aside>
					<Link to={{pathname:'/one', search:'?name=ky', hash:'#the-one', state:{fromDashboard:true}}}>one</Link>
					<br/>
					<Link to='/two'>two</Link>
				</aside>
				<div>
					<Switch>
						<Route exact path='/' render={(props)=>(<MainPage {...props} x={100} y={100}/>)}/>
						<Route path='/two' component={PageTwo}/>
						<Route path='/one' component={PageOne}/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
