import React, { Component } from 'react'
import { BrowserView, MobileView } from "react-device-detect";
import axios from 'axios';

import Menu from './Menu'
import MobileWeek from './MobileWeek'
import Week from './Week'

import moment from "moment"
import 'moment/locale/fr';
import 'moment-timezone';
import Moment from 'react-moment';
import 'moment/locale/fr';

// import "./css/calendar.css"
// import dataTest from './dataTest.json'

Moment.globalFormat = 'DD MMM YYYY';

class Weekly extends Component {
    state = {
        days: [],
        dayEvent: [],
        dayDate: '',
        date: '',
        monthForDisplay: moment( 'YYYY MMM', 'fr').startOf('hour').format('MMMM YYYY')
    }

    getevent = async (type) => {
        await axios
            .get("http://localhost:4000/a5/event")
            .then(results => {
                type(results.data)
            })
    }
    getStyle = async () => {
		await axios
		.get("http://localhost:4000/a4/decoration")
		.then(results => {
			const exactDeco = results.data[0]
			this.setState({colorDB: exactDeco.textcolor})
})
	}

    createDateArrayNext = (datas) => {
        let dateArr = []
        for (let i = 0; i < 5; i++) {
            const dataDay = datas.filter((data) => moment(data.dateStart).format('DD MMM YYYY') === this.state.date.format('DD MMM YYYY'))
            const dayToPush = {
                date: this.state.date.format('DD MMM YYYY'),
                data: dataDay
            }
            dateArr.push(dayToPush)
            this.setState({ date: moment(this.state.date).add(1, 'days') })
        }
        this.setState({ days: dateArr })
        this.setState({monthForDisplay: moment(this.state.date, 'YYYY MMM', 'fr').startOf('hour').format('MMMM YYYY')})
    }

    createDateArrayPrev = (datas) => {
        let dateArr = []
        for (let i = 0; i < 5; i++) {
            this.setState({ date: moment(this.state.date).subtract(1, 'days') })
            const dataDay = datas.filter((data) => moment(data.dateStart).format('DD MMM YYYY') === this.state.date.format('DD MMM YYYY'))
            const dayToPush = {
                date: this.state.date.format('DD MMM YYYY'),
                data: dataDay
            }
            dateArr.unshift(dayToPush)
        }
        this.setState({ days: dateArr })
        this.setState({ date: moment(this.state.date).add(5, 'days') })
        this.setState({monthForDisplay: moment(this.state.date, 'YYYY MMM', 'fr').startOf('hour').format('MMMM YYYY')})
    }

    componentDidMount = async () => {
        this.setState({ date: moment().startOf('hour') })
        await this.getStyle()
        await this.getevent(this.createDateArrayNext)
        const dayForSelect = moment().startOf('hour').format('DD MMM YYYY')
        const selectDayTest = dayForSelect[0]
        this.selectDay(selectDayTest)
        console.log(this.state.monthForDisplay)
    }

    componentDidUpdate() {
        this.displaySelector(this.state.dayDate)
    }

    componentWillReceiveProps = async () => {
        if(this.props.dateOnClick){
            this.setState({ date: moment(this.props.dateOnClick).subtract(5, 'days') })
        }else{
            this.setState({ date: moment().startOf('hour') })
        }
        await this.getevent(this.createDateArrayNext)
        const dayForSelect = moment().startOf('hour').format('DD MMM YYYY')
        const selectDayTest = dayForSelect[0]
        this.selectDay(selectDayTest)
    }
    
    selectDay(i) {
        const day = this.state.days.filter((display) => display.date.includes(i))
        const dayArr = day[0]
        this.setState({ dayEvent: dayArr.data })
        this.setState({ dayDate: dayArr.date })
    }

    previousDays = () => {
        this.setState({ date: moment(this.state.date).subtract(5, 'days') })
        this.getevent(this.createDateArrayPrev)
    }

    nextDays = () => {
        this.getevent(this.createDateArrayNext)
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
            

            <div className='weeklyContainer' id='weekly'>
                <BrowserView>
                    <div className='weekly'>

                        

                        <div className='weeklyDesktop'>

                            <div className='weeklyHead'>
                                <h1>Agenda {this.state.monthForDisplay}</h1>
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
                            <h1>Agenda {this.state.monthForDisplay}</h1>
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
            </div>
        )
    }
}

export default Weekly