import React, { Component } from 'react'
import Menu from './Menu'
import './calendar.css'
import Weekly from "./Weekly"

import { Link } from 'react-router-dom';

class Calendar extends Component {
    render() {
        return (

            <div className='Calendar'>
                <div className='navbar'>
                    <Menu />
                    <Link to="/admin" ><input type="submit" value="Admin" /></Link>
                    <Link to="/login" ><input type="submit" value="Login" /></Link></div>
                <Weekly />
            </div>
        )
    }
}

export default Calendar
