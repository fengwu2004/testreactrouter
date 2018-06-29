import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink } from 'react-router-dom'
import PopUpDatePicker from 'rmc-date-picker'
import PopUp from 'rmc-date-picker/lib/Popup'

const now = new Date()

const minDate = now

const maxDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

export class PageTwo extends React.Component {
	
	state = {
		date: new Date(2017, 2, 31, 15, 1, 1),
		mode: 'datetime',
	};
	
  render() {
	
	  const { date, mode } = this.state;
	  
	  const datepicker = (
		  <PopUpDatePicker rootNativeProps={{'data-xx': 'yy'}}
		                   defaultDate={date || now}
		                   mode={mode}
		                   maxDate={maxDate}
		                   minDate={minDate}
		                   onDateChange={this.onDateChange}
		                   onValueChange={this.onValueChange}
		                   onScrollChange={this.onScrollChange}>
		  </PopUpDatePicker>
	  )
	  
    return (
      <div className="App">
	     <PopUp datePicker={datepicker} visible={true}></PopUp>
      </div>
    );
  }
}
