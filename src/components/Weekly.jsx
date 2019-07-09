import React, { Component } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from 'react-router-dom'

import Menu from './Menu'
import MobileWeek from './MobileWeek'
import Week from './Week'

import dataTest from "./dataTest.json"
import "./css/calendar.css"

class Weekly extends Component {
    state = {
        days: [],
        dayEvent: [],
        dayDate: ''
    }

    selectDay(i) {
        const day = dataTest.filter((display) => display.date.includes(i))
        const dayArr = day[0]
        this.setState({ dayEvent: dayArr.data })
        this.setState({ dayDate: dayArr.date })
    }


    componentDidMount() {
        this.setState({ days: dataTest.filter((display) => display.id < 5) })
        this.selectDay(0)
    }

    componentDidUpdate() {
        this.displaySelector(this.state.dayDate)
    }

    previousDays = () => {
        this.setState({ days: dataTest.filter((display) => display.id < 5) })
    }

    nextDays = () => {
        this.setState({ days: dataTest.filter((display) => display.id > 4) })
    }

    displaySelector = (select) => {
        const selection = document.getElementsByClassName(select)
        const accurateSelec = selection[0]
        const selected = document.getElementById('selected')

        if (selected) { selected.id = '' }
        if (accurateSelec) {
            const clasSelect = accurateSelec.className
            if (clasSelect) { accurateSelec.id = 'selected' }
        }
    }

    handleSelector = (event) => {
        this.selectDay(event.target.innerHTML)
        this.displaySelector(event.target.className)
    }



    render() {
        return (
            <>
                <BrowserView>
                    <div className='calendar'>

                        <div className='navbar'>
                            <Menu />
                            <Link to="/menu-admin" ><input type="submit" value="Admin" /></Link>
                            <Link to="/login" ><input type="submit" value="Login" /></Link>
                            <Link to="/month"><input type="submit" value="Monthly" /></Link>
                        </div>

                        <div className='weeklyDesktop'>

                            <div className='weeklyHead'>
                                <h1>Agenda Mars 2019</h1>
                            </div>

                            <div className='weeklyDisplay'>
                                <div onClick={this.previousDays} className='previousDesktop'><i className="arrow left"></i></div>

                                <Week dataDays={this.state.days} />

                                <div onClick={this.nextDays} className='nextDesktop'><i className="arrow right"></i></div>
                            </div>
                        </div>

                    </div>
                </BrowserView>

                <MobileView>

                    <div className='weeklyMobile'>

                        <div className='weeklyHeadMobile'>
                            <h1>Agenda Mars 2019</h1>
                        </div>

                        <div className='weeklyDisplayMobile'>


                            <MobileWeek dataDays={this.state.days}
                                date={this.state.dayDate}
                                dataEvent={this.state.dayEvent}
                                previous={this.previousDays}
                                next={this.nextDays}
                                selector={this.handleSelector} />

                        </div>

                    </div>

                </MobileView>
            </>
        )
    }
}

export default Weekly