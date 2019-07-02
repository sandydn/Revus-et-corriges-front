import React, { Component } from 'react'
import Week from './Week'
import dataTest from "./dataTest.json"
import Menu from './Menu'
import MobileWeek from './MobileWeek'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from "react-device-detect";
import "./css/calendar.css"

class Weekly extends Component {
    state = {
        days: [],
        dayEvent: [],
        dayDate: ''
    }

    

    componentDidMount() {
        this.setState({ days: dataTest.filter((display) => display.id < 5) })
        const day = dataTest.filter((display)=> display.id === 1)
        const dayArr = day[0]
        this.setState({ dayEvent : dayArr.data })
        this.setState({ dayDate : dayArr.date })

    }

    previousDays = () => {
        this.setState({ days: dataTest.filter((display) => display.id < 5) })
    }

    nextDays = () => {
        this.setState({ days: dataTest.filter((display) => display.id > 4) })
    }



    render() {
        // console.log(this.state.dayEvent)

        return (
            <>
                <BrowserView>
                    <div className='calendar'>

                        <div className='navbar'>
                            <Menu />
                            <Link to="/select-form" ><input type="submit" value="Admin" /></Link>
                            <Link to="/login" ><input type="submit" value="Login" /></Link>
                            <Link to="/month"><input type="submit" value="Monthly" /></Link>
                        </div>

                        <div className='weekly'>

                            <div className='weeklyHead'>
                                <h1>Agenda Mars 2019</h1>
                            </div>

                            <div className='weeklyDisplay'>
                                <div onClick={this.previousDays}><i className="arrow left"></i></div>

                                <Week dataDays={this.state.days} />

                                <div onClick={this.nextDays}><i className="arrow right"></i></div>
                            </div>
                        </div>

                    </div>
                </BrowserView>

                <MobileView>

                    <div className='weekly'>

                        <div className='weeklyHead'>
                            <h1>Agenda Mars 2019</h1>
                        </div>

                        <div className='weeklyDisplayMobile'>
                            <div onClick={this.previousDays}><i class="arrow left"></i></div>

                            <MobileWeek dataDays={this.state.days} date={this.state.dayDate} dataEvent={this.state.dayEvent} />

                            <div onClick={this.nextDays}><i class="arrow right"></i></div>
                        </div>

                    </div>

                </MobileView>
            </>
        )
    }
}

export default Weekly