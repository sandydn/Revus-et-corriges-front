import React, { Component } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from 'react-router-dom'
import axios from 'axios';

import Menu from './Menu'
import MobileWeek from './MobileWeek'
import Week from './Week'

import moment from "moment"
import 'moment/locale/fr';
import 'moment-timezone';
import Moment from 'react-moment';
import 'moment/locale/fr';

import dataTest from "./dataTest.json"
import "./css/calendar.css"

Moment.globalFormat = 'D MMM YYYY';

class Weekly extends Component {
    state = {
        days: [],
        dayEvent: [],
        dayDate: '',
        dateObj: moment(),
        date: ''
    }

    getevent() {
        axios
            .get("http://localhost:4000/a5/event")
            .then(results => {
                this.createDateArray(results.data)
                this.setState({ results: results.data })
            })
    }

    

    createDateArray = (datas) => {
        let dateArr = []
        for (let i = 0; i < 7; i++ ){
            const dataDay = datas.filter((data) => moment(data.dateStart).format('DD MMM YYYY') === this.state.date.format('DD MMM YYYY'))
            const dayToPush = {
                date: this.state.date.format('DD MMM YYYY'),
                data: dataDay
            }
            dateArr.push(dayToPush)
            this.setState({date: moment(this.state.date).add(1, 'days')})
        }
        console.log(dateArr)
        // console.log(moment(this.state.date).format('DD MMM YYYY'))
        // console.log(datas.map((data)=> moment(data.dateStart).format('DD MMM YYYY')))
    }

    selectDay(i) {
        const day = dataTest.filter((display) => display.date.includes(i))
        const dayArr = day[0]
        this.setState({ dayEvent: dayArr.data })
        this.setState({ dayDate: dayArr.date })
    }


    componentDidMount() {
        this.setState({ days: dataTest.filter((display) => display.id < 5) })
        this.setState({ date: moment().startOf('hour')})
        this.selectDay(0)
        this.getevent()
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
        // this.setState({ days: dataTest.filter((display) => display.id > 4) })
        // this.setState({date: moment(this.state.date).add(7, 'days')})
        this.getevent()
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

    dateTest = moment().startOf('hour');

  
    render() {
        


        const dateToFormat = '1976-04-19T12:59-0500';
        return (

            <>
            <Moment>{dateToFormat}</Moment>
            <br/>
            <Moment>{this.dateTest}</Moment>
            <button onClick={this.nextDays}>TEST</button>
            </>

            // <>
            //     <BrowserView>
            //         <div className='calendar'>

            //             <div className='navbar'>
            //                 <Menu />
            //                 <Link to="/menu-admin" ><input type="submit" value="Admin" /></Link>
            //                 <Link to="/login" ><input type="submit" value="Login" /></Link>
            //                 <Link to="/month"><input type="submit" value="Monthly" /></Link>
            //             </div>

            //             <div className='weeklyDesktop'>

            //                 <div className='weeklyHead'>
            //                     <h1>Agenda Mars 2019</h1>
            //                 </div>

            //                 <div className='weeklyDisplay'>

            //                 {/* TEST */}
            //                 {/* <div>{daysinweek}</div> */}
            //                 {/* TEST */}

            //                     <div onClick={this.previousDays} className='previousDesktop'><i className="arrow left"></i></div>

            //                     <Week dataDays={this.state.days} />

            //                     <div onClick={this.nextDays} className='nextDesktop'><i className="arrow right"></i></div>
            //                 </div>
            //             </div>

            //         </div>
            //     </BrowserView>

            //     <MobileView>

            //         <div className='weeklyMobile'>

            //             <div className='weeklyHeadMobile'>
            //                 <h1>Agenda Mars 2019</h1>
            //             </div>

            //             <div className='weeklyDisplayMobile'>


            //                 <MobileWeek dataDays={this.state.days}
            //                     date={this.state.dayDate}
            //                     dataEvent={this.state.dayEvent}
            //                     previous={this.previousDays}
            //                     next={this.nextDays}
            //                     selector={this.handleSelector} />

            //             </div>

            //         </div>

            //     </MobileView>
            // </>
        )
    }
}

export default Weekly