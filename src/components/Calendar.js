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

<<<<<<< HEAD
            
=======
            <div className='Calendar'>
                <div className='navbar'>
                    <Menu />
                    <Link to="/admin" ><input type="submit" value="Admin" /></Link>
                    <Link to="/login" ><input type="submit" value="Login" /></Link></div>
>>>>>>> 2d4ae5703ca692cec5f1ce6b649ff45afbf0d4af
                <Weekly />
            
        )
    }
}

export default Calendar
