import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink } from 'react-router-dom'

export class PageOne extends React.Component {
	
	componentDidMount() {
	
		console.log(this.props)
	}
	
  render() {
	
	  return (
      <div className="App">
        <div>这是第一页</div>
      </div>
    );
  }
}
