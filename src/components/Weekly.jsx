import React, { Component } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from 'react-router-dom'

import Menu from './Menu'
import MobileWeek from './MobileWeek'
import Week from './Week'

import moment from "moment"
import 'moment/locale/fr';
import 'moment-timezone';

import dataTest from "./dataTest.json"
import "./css/calendar.css"

class Weekly extends Component {
    state = {
        days: [],
        dayEvent: [],
        dayDate: '',
        dateObj: moment()
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

    // TEST
    // firstDayOfWeek = () => {
    //     let dateObject = this.state.dateObj;
    //     let firstDay = moment(dateObject)
    //       .startOf("week")
    //       .format("w");
    
    //     return firstDay;
    //   };

    //   daysInWeek = () => {
    //      return this.state.dateObj.isoWeekday("D");
    //   };

      
// TEST

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

    // currentDayOfWeek = () => {
    //     console.log
    //     return this.state.dayDate/* .format("D") */
    // }

    render() {


// TEST

// let blanks = [];
//   for (let i = 0; i < this.firstDayOfWeek(); i++) {
//     blanks.push(<div>{""}</div>);
//   }



//         let daysInWeek = [];
//         for (let w = 1; w <= this.daysInWeek(); w++) {
//             let currentDayOfWeek = w == this.currentDayOfWeek() ? "today" : "";

//             let dayOfEvent = false
//             this.state.dayEvent.map( event => {
//                 const eventDateStart = moment(event.dateStart).format("D")       
//                 if (w == eventDateStart) {

//                 return dayOfEvent = true
//                 }
//             })
//             const calendarDay = dayOfEvent ? 'calendar-day-event' : 'calendar-day-not-event'   
//             daysInWeek.push(
//                 <div key={w} className = { `${calendarDay} ${currentDayOfWeek}`}>

//                 <h3 onClick={e => {this.onDayClick(e, w)}}>{w}</h3>

//                 </div>
//             )
//             }

//             let totalSlots = [...blanks, ...daysinweek];
//             let rows = [];
//             let cells = [];

//             totalSlots.forEach((row, i) => {
//                 if (i % 7 !== 0) {
//                 cells.push(row);
//                 } else {
//                 rows.push(cells);
//                 cells = [];
//                 cells.push(row);
//                 }

//                 if (i === totalSlots.length - 1) {
//                 rows.push(cells);
//                 }
//             });

//             let daysinweek = rows.map((w, i) => {

//                 return <h3>{w}</h3>;
//             });
// TEST

        return (
            <>
                <BrowserView>
                    <div className='calendar'>

                        <div className='navbar'>
                            <Menu />
                            <Link to="/login" ><input type="submit" value="Admin" /></Link>
                            <Link to="/month"><input type="submit" value="Monthly" /></Link>
                        </div>

                        <div className='weeklyDesktop'>

                            <div className='weeklyHead'>
                                <h1>Agenda Mars 2019</h1>
                            </div>

                            <div className='weeklyDisplay'>

                            {/* TEST */}
                            {/* <div>{daysinweek}</div> */}
                            {/* TEST */}

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