import React, { Component } from 'react'
import Menu from './Menu'
import Weekly from "./Weekly"
import Monthly from "./Monthly"
import './calendar.css'
import './Monthly.css'

import { Link } from 'react-router-dom';

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

            
            <div className='Calendar'>
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
