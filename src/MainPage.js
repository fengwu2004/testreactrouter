import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink } from 'react-router-dom'

export class MainPage extends React.Component {
	
	handleBack = () => {
	
		const location = {
			pathname:'/main/one',
			state:{
				customdata:{a:1, b:2}
			}
		}
		
		this.props.history.push(location)
	}
	
	componentDidMount() {
		
		console.log('props', this.props)
	}
	
  render() {
	
	  console.log('props', this.props.match)
	  
    return (
      <div className="App">
        <div>这是主页</div>
      </div>
    );
  }
}
