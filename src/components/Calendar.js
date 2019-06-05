import React, { Component } from 'react'
import './calendar.css'
import Weekly from "./Weekly"

import { Link } from 'react-router-dom';

class Calendar extends Component {
    render() {
        return (

            <div className='Calendar'>
                <div className='navbar'><p>navbar</p><Link to="/select-form" ><input type="submit" value="Admin" /></Link>
                    <Link to="/login" ><input type="submit" value="Login" /></Link></div>
                <Weekly />
            </div>
        )
    }
}

export default Calendar
