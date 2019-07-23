import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Menu from './Menu'
import Weekly from "./Weekly"
import MonthlyV2 from './MonthlyV2'
import axios from 'axios';

import './css/CalendarV2.css'

class Calendar extends Component {
	state = {
		monthToWeek: 'Go to Monthly',
		showButton: 'hidden'
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

	getStyle = async () => {
		await axios
		.get("http://localhost:4000/a4/decoration")
		.then(results => {
			const exactDeco = results.data[0]
			this.setState({colorDB: exactDeco.textcolor})

			const weeklyContainer = document.getElementById('weekly')
			const monthlyContainer = document.getElementById('monthly')

			const urlBackground = `url(${exactDeco.background})`
			monthlyContainer.style.background = urlBackground
			weeklyContainer.style.background = urlBackground

			const monthEvent = document.querySelectorAll('.calendar .body .cell')
			const loupe = document.querySelector('.boutonLoupe')
			
			loupe.style.background = exactDeco.textcolor
			const selectMobile = document.getElementById('selected')
			// selectMobile.style.background = exactDeco.textcolor
			console.log(loupe);
			
            })
	}
	
	updateButton = async() => {
		const butoon = document.getElementById('buttonAdmin')
		await this.props.verif ? butoon.style.display = 'block' : butoon.style.display = 'none'
	}
	
	componentDidMount() {
		this.getStyle()
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

    handleSearch = async (e) => {
        await this.setState({dateOnClick: e.target.id})
        this.handleClickForSearch() 
    }

    handleClickForSearch = () => {
        const weekly = document.getElementById('weekly')
        const monthly = document.getElementById('monthly')

        monthly.style.display = 'none'
        weekly.style.display = 'flex'
        this.setState({ monthToWeek: 'Go to Monthly' })
    }
	
	render() {
		
		return (
		
			<div className='calendarScreen'>
				<div className='navbar'>
					<Menu search={this.handleSearch}/>
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