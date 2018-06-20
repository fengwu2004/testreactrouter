import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink } from 'react-router-dom'

export class PageTwo extends React.Component {
	
  render() {
	
    return (
      <div className="App">
        <div>这是第二页</div>
      </div>
    );
  }
}
