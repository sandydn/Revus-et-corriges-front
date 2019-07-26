import React, { Component } from 'react'
import { BrowserView, MobileView } from "react-device-detect"
import axios from 'axios'

import MobileWeek from './MobileWeek'
import Week from './Week'

import moment from "moment"
import 'moment/locale/fr'
import 'moment-timezone'
import Moment from 'react-moment'

class Weekly extends Component {
    state = {
        results:[],
        days: [],
        dayEvent: [],
        dayDate: '',
        date: '',
        monthForDisplay: moment( 'YYYY MMM', 'fr').startOf('hour').format('MMMM YYYY')
    }

    getevent = async () => {
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event'
        }
        await axios
            .get(pathApi)
            .then(results => {
                this.setState({results : results.data})
            })
    }
    

    createDateArrayNext = async (datas) => {
        let dateArr = []
        for (let i = 0; i < 5; i++) {
            const dataDay = datas.filter((data) => moment(data.dateStart).format('DD MMM YYYY') === this.state.date.format('DD MMM YYYY'))
            const dayToPush = {
                date: this.state.date.format('DD MMM YYYY'),
                data: dataDay
            }
            dateArr.push(dayToPush)
            await this.setState({ date: moment(this.state.date).add(1, 'days') })
        }
        this.setState({ days: dateArr })
        this.setState({monthForDisplay: moment(this.state.date, 'YYYY MMM', 'fr').startOf('hour').format('MMMM YYYY')})
    }

    componentDidMount = async () => {
        await this.setState({ date: moment().startOf('hour') })
        await this.getevent()
        this.createDateArrayNext(this.state.results)
        const dayForSelect = moment().startOf('hour').format('DD MMM YYYY')
        const selectDayTest = dayForSelect[0]
        this.selectDay(selectDayTest)
    }

    componentDidUpdate() {
        this.displaySelector(this.state.dayDate)
    }

    componentWillReceiveProps = async  () => {
        if (this.props.dateOnClick) {
            await this.setState({ date: moment(this.props.dateOnClick) })
            console.log(this.state.date)
            await this.createDateArrayNext(this.state.results)
            const dayForSelect = moment().startOf('hour').format('DD MMM YYYY')
            const selectDayTest = dayForSelect[0]
            this.selectDay(selectDayTest)
        }
    }
    
    selectDay(i) {
        const day = this.state.days.filter((display) => display.date.includes(i))
        
        const dayArr = day[0]
        this.setState({ dayEvent: dayArr.data })
        this.setState({ dayDate: dayArr.date })
    }

    previousDays = async () => {
        await this.setState({ date: moment(this.state.date).subtract(10, 'days') })
        this.createDateArrayNext(this.state.results)
        this.props.style()
    }

    nextDays = async () => {
        this.createDateArrayNext(this.state.results)
        this.props.style()
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

            <div className='weeklyContainer apply-font' id='weekly'>
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