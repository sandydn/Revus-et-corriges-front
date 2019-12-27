import React from "react"
import axios from 'axios'
import moment from "moment"

import './css/MonthlyV3.css'

class Monthly extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        compareDates: [],
    }

    handleHoverIn = (e) => {
        const cell = document.getElementById(e.target.id)
        if(cell){
            cell.style.background = 'rgba(250, 250, 250, 0.800)'}
    }

    handleHoverOff = (e) => {
        const cell = document.getElementById(e.target.id)
        if(cell){
            cell.style.background = this.state.background}
    }

    getStyle = async () => {
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration'
        }
		await axios
		.get(pathApi)
		.then(results => {
			const exactDeco = results.data[0]
            this.setState({background: exactDeco.textcolor})
            this.setState({hoverStyle:{background: exactDeco.textcolor}})
            })
	}
    
    renderHeader() {
        const dateFormat = "MMMM YYYY"

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>{moment(this.state.currentMonth).format(dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        )
    }

    renderDays() {
        const dateFormat = "dddd"
        const days = []

        let startDate = moment(this.state.currentMonth).startOf('week')

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {moment(startDate).add(i, 'days').format(dateFormat)}
                </div>
            )
        }
        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth } = this.state
        const monthStart = moment(currentMonth).startOf('month') 
        const monthEnd = moment(monthStart).endOf('month') 
        const startDate = moment(monthStart).startOf('week') 
        const endDate = moment(monthEnd).endOf('week') 

        const dateFormat = "D"
        const rows = []

        let days = []
        let day = startDate
        let formattedDate = ""

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = moment(day).format(dateFormat) 
                const cloneDay = moment(day).format('DD MMM YYYY')
                let compare = this.state.compareDates.includes(cloneDay)
                
                days.push(
                    <div
                      id = {cloneDay}
                      className={`col cell ${
                        !moment(day).isSame(monthStart, 'month') 
                          ? "disabled"
                          : compare ? "eventMonth" : "none"
                      }`}
                      key={day}
                      onClick={this.props.monthly2Weekly}
                      style={this.state.hoverStyle}
                      onMouseEnter={this.handleHoverIn}
                      onMouseLeave={this.handleHoverOff}
                        >
                        <span className="number">{formattedDate}</span>
                    </div>
                )
                day = moment(day).add(1, 'days')
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            )
            days = []
        }
        return <div className="body">{rows}</div>
    }

    getevent = async () => {
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event'
        }
        await axios
            .get(pathApi)
            .then(results => {
                this.setState({ dataEvents: results.data })
            })
    }

    compareDate = () => {
        let comparing = []
        comparing = this.state.dataEvents.map((event) => moment(event.dateStart).format('DD MMM YYYY'))
        this.setState({ compareDates: comparing })
    }

    componentDidMount = async () => {
        await this.getStyle()
        await this.getevent()
        this.compareDate()
    }

    nextMonth = () => {
        this.setState({
            currentMonth: moment(this.state.currentMonth).add(1, 'months')
        })
    }

    prevMonth = () => {
        this.setState({
            currentMonth: moment(this.state.currentMonth).subtract(1, 'months')
        })
    }

    render() {
        return (
            <div style={{display:"none"}} className="calendar apply-font" id="monthly">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        )
    }
}

export default Monthly