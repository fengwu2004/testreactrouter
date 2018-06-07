import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink } from 'react-router-dom'

export class MainOne extends React.Component {
	
	handleBack = () => {
	
		console.log(this.props.history)
	}
	
  render() {
    return (
      <div className="App">
        <div>这是第一页</div>
				<div style={{width:'10rem', height:'10rem', textAlign:'center', background:'red', lineHeight:'10rem'}} onClick={this.handleBack}>返回</div>
      </div>
    );
  }
}
