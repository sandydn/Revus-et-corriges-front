import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'

import Menu from './Menu'
import Weekly from "./Weekly"
import MonthlyV2 from './MonthlyV2'

import './css/CalendarV2.css'


class Calendar extends Component {
state = {
    monthToWeek:'Go to Monthly'
}
handleClick = () => {
    const weekly = document.getElementById('weekly')
    const monthly = document.getElementById('monthly')

    if(monthly.style.display === 'none'){
        weekly.style.display = 'none'
        monthly.style.display = 'block'
        this.setState({monthToWeek: 'Go to Weekly'})
    }else{
        monthly.style.display = 'none'
        weekly.style.display = 'flex'
        this.setState({monthToWeek: 'Go to Monthly'})
    }
    }
   

    render() {

        return (

            <div className='calendarScreen'>
                <div className='navbar'>
                            <Menu />
                            <Link to="/menu-admin" ><input type="submit" value="Admin" /></Link>
                            <Link to="/login" ><input type="submit" value="Login" /></Link>
                            <button onClick={this.handleClick}>{this.state.monthToWeek}</button>
            </div>
            <Weekly />
            <MonthlyV2 />
            </div>
        )
    }
}

export default Calendar;
