import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'
import Menu from './Menu'
import Monthly from './Monthly'
import Weekly from "./Weekly"

import '../components/css/calendar.css'

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
			const urlBackground = `url(${exactDeco.background})`
			this.setState({colorDB: exactDeco.textcolor})
			this.setState({backgroundDB: urlBackground })
			this.setState({fontDB: exactDeco.textfont})
            })
	}

	useStyle = () => {
		const weeklyContainer = document.getElementById('weekly')
		const monthlyContainer = document.getElementById('monthly')
		monthlyContainer.style.background = this.state.backgroundDB
		weeklyContainer.style.background = this.state.backgroundDB


		const loupe = document.querySelector('.boutonLoupe')
		loupe.style.background = this.state.colorDB

		const important = document.querySelectorAll('.important')

		if(important){
			for (let i = 0; i < important.length; i++){
				important[i].style.background = this.state.colorDB
			}
		}
		
	}
	
	updateButton = async () => {
		const butoon = document.getElementById('buttonAdmin')
		await this.props.verif ? butoon.style.display = 'block' : butoon.style.display = 'none'
	}
	
	componentDidMount = async ()=> {
		await this.getStyle()
		this.useStyle()
		this.updateButton()
	}
	
	componentDidUpdate() {
		this.updateButton()
		this.useStyle()
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
		<div>
			<div className='calendarScreen'> 
				<div className='navbar'>
					<Menu search={this.handleSearch}/>
					<Link to="/menu-admin" id='buttonAdmin' ><input type="submit" value="Admin" /></Link>
					<button className='buttonGoToMonthly' onClick={this.handleClick}>{this.state.monthToWeek}</button>
				</div>
				<Weekly dateOnClick = {this.state.dateOnClick} style={this.useStyle}/>
        		<Monthly monthly2Weekly = {this.handleMonthly2Weekly} />
			</div>
			<div>
				<Link to='/login'>
					<img src={tardis} alt="flèche" className='tardis' href='link'/>
				</Link>
			</div>
		</div>
		)
	}
}

export default Calendar