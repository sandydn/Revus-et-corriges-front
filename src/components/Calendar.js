import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Menu from './Menu'
import Weekly from "./Weekly"
import MonthlyV2 from './MonthlyV2'

import './css/CalendarV2.css'

class Calendar extends Component {
	state = {
		monthToWeek: 'Go to Monthly',
		showButton: 'hidden'
	}
	
	updateButton = async() => {
		const butoon = document.getElementById('buttonAdmin')
		await this.props.verif ? butoon.style.display = 'block' : butoon.style.display = 'none'
	}
	
	componentDidMount() {
		this.updateButton()
	}
	
	componentDidUpdate() {
		this.updateButton()
	}

	handleClick = () => {
		const weekly = document.getElementById('weekly')
		const monthly = document.getElementById('monthly')

		if (monthly.style.display === 'none') {
			weekly.style.display = 'none'
			monthly.style.display = 'block'
			this.setState({ monthToWeek: 'Go to Weekly' })
		}
		else {
			monthly.style.display = 'none'
			weekly.style.display = 'flex'
			this.setState({ monthToWeek: 'Go to Monthly' })
		}
	}
	
	handleMonthly2Weekly = async (e) => {
		await this.setState({dateOnClick: e.target.id})
		this.handleClick() 
	 }
	
	render() {
		
		return (
		
			<div className='calendarScreen'>
				<div className='navbar'>
					<Menu />
					<Link to="/menu-admin" id='buttonAdmin' ><input type="submit" value="Admin" /></Link>
					<button className='buttonGoToMonthly' onClick={this.handleClick}>{this.state.monthToWeek}</button>
				</div>
				<Weekly dateOnClick = {this.state.dateOnClick}/>
        <MonthlyV2 monthly2Weekly = {this.handleMonthly2Weekly} />
			</div>

			
		)
	}
	
}

export default Calendar;