import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Menu from './Menu'
import Weekly from "./Weekly"
import MonthlyV2 from './MonthlyV2'

import './css/CalendarV2.css'
// import './css/calendar.css'

class Calendar extends Component {
	state = {
		monthToWeek: 'Go to Monthly',
		showButton: false
	}
	handleClick = () => {
		const weekly = document.getElementById('weekly')
		const monthly = document.getElementById('monthly')

		if (monthly.style.display === 'none') {
			weekly.style.display = 'none'
			monthly.style.display = 'block'
			this.setState({ monthToWeek: 'Go to Weekly' })
		} else {
			monthly.style.display = 'none'
			weekly.style.display = 'flex'
			this.setState({ monthToWeek: 'Go to Monthly' })
		}
	}

	butoonClass = ''

	updateButoon = () => {
		if (this.props.verif) {
			this.buttonClass = 'button'
		} else {
			this.buttonClass = 'hidden'
		}
	}

	componentDidMount() {
		this.updateButoon()
	}

	componentDidUpdate() {
		this.updateButoon()
	}

	render() {

		return (

			<div className='calendarScreen'>
				<div className='navbar'>
					<Menu />
					<Link to="/menu-admin" className={this.buttonClass} ><input type="submit" value="Admin" /></Link>
					{this.renderButtonAdmin}
					<button onClick={this.handleClick}>{this.state.monthToWeek}</button>
				</div>
				<Weekly />
				<MonthlyV2 />
			</div>
		)
	}
}

export default Calendar;