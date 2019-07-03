import React, { Component } from 'react'
import Weekly from "./Weekly"
import './calendar.css'
import './Monthly.css'

// import { Link } from 'react-router-dom';
// import Monthly from "./Monthly"
// import Menu from './Menu'

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
                <Weekly />
        )
    }
}

export default Calendar
