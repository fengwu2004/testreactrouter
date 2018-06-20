import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {
	
	componentDidUpdate(prevProps) {
		
		console.log('componentDidUpdate')
		
		if (this.props.location !== prevProps.location) {
			
			window.scrollTo(0, 0)
		}
	}
	
	componentDidMount() {
		
		console.log('componentDidMount')
	}
	
	render() {
		
		return this.props.children
	}
}

export default withRouter(ScrollToTop)