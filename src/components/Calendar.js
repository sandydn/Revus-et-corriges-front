import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu'
import Weekly from "./Weekly"
import Monthly from "./Monthly"

import './css/calendar.css'
import './Monthly.css'


class Calendar extends Component {

    handleClick = () => {
        const week = document.getElementsByClassName('weekly')
        const month = document.getElementsByClassName('monthly')
        if (week.style.display === 'none') {
            week.style.display = 'flex'
            month.style.display = 'none'
        }else{
            week.style.display = 'none'
            month.style.display = 'flex'
        }
    }

    render() {

        return (

            <div className='calendar'>
                <div className='navbar'>
                    <Menu />
                    <Link to="/select-form" ><input type="submit" value="Admin" /></Link>
                    <Link to="/login" ><input type="submit" value="Login" /></Link>
                </div>
                <Weekly />
            </div>
        )
    }
}

export default Calendar;
