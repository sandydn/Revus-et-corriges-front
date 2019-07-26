import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'
import moment from 'moment'
import Menu from './Menu'
import Monthly from './Monthly'
import Weekly from "./Weekly"

import '../components/css/calendar.css'
import tardis from '../pictures/tardis.png'

class Calendar extends Component {
	state = {
		monthToWeek: 'Vue mensuelle',
		showButton: 'hidden',
		count: 0
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
		let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration/'
    }
		await axios
		.get(pathApi)
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
			this.setState({ monthToWeek: 'Vue hebdomadaire' })
		}
		else {
			monthly.style.display = 'none'
			weekly.style.display = 'flex'
			this.setState({ monthToWeek: 'Vue mensuelle' })
		}
	}

	
	count = 0

	handleMonthly2Weekly = async (e) => {
		const clickDate = e.target.id
		this.count += 1
		await this.count == 1 ? this.setState({dateOnClick: clickDate}) : this.setState({dateOnClick: moment(clickDate).subtract(1, 'days')})
		await this.handleClick() 
    }

    handleSearch = async (e) => {
        const clickDate = e.target.id
		this.count += 1
		await this.count == 1 ? this.setState({dateOnClick: clickDate}) : this.setState({dateOnClick: moment(clickDate).subtract(1, 'days')})
        this.handleClickForSearch() 
    }

    handleClickForSearch = () => {
        const weekly = document.getElementById('weekly')
        const monthly = document.getElementById('monthly')

        monthly.style.display = 'none'
        weekly.style.display = 'flex'
        this.setState({ monthToWeek: 'Vue mensuelle' })
    }
	
	render() {
		return (
		<div>
			<div className='calendarScreen'> 
				<div className='navbar'>
					<Menu search={this.handleSearch}/>
					<button className='buttonGoToMonthly' onClick={this.handleClick}>{this.state.monthToWeek}</button>
				</div>
				<Weekly dateOnClick = {this.state.dateOnClick} style={this.useStyle}/>
        		<Monthly monthly2Weekly = {this.handleMonthly2Weekly} />
			</div>
			<div>
				<Link to='/menu-admin'>
					<img src={tardis} alt="flèche" className='tardis' href='link'/>
				</Link>
			</div>
		</div>
		)
	}
}

export default Calendar