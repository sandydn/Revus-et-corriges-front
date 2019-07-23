import React from "react";
import dateFns from "date-fns";
import axios from 'axios';
import moment from "moment";

import './css/MonthlyV3.css'

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date(),
        compareDates: [],
        // background: 'rgba(212, 77, 77, 0.418)',
        // hoverStyle: {background: 'rgba(212, 77, 77, 0.418)'},
    };

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
		await axios
		.get("http://localhost:4000/a4/decoration")
		.then(results => {
			const exactDeco = results.data[0]
            this.setState({background: exactDeco.textcolor})
            this.setState({hoverStyle:{background: exactDeco.textcolor}})
            })
	}
    
    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
            </div>
                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }

    displayEventDate(dayEvent) {

    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = moment(day).format('DD MMM YYYY')
                let compare = this.state.compareDates.includes(cloneDay)
                

                days.push(
                    <div
                      id = {cloneDay}
                      className={`col cell ${
                        !dateFns.isSameMonth(day, monthStart)
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

                day = dateFns.addDays(day, 1);
            }

            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    getevent = async () => {
        await axios
            .get("http://localhost:4000/a5/event")
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
        console.log(this.state)
    }

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        var linkStyle;
        if (this.state.hover) {
          linkStyle = {color: '#ed1212',cursor: 'pointer'}
        } else {
          linkStyle = {color: '#000'}
        }
        return (
            <div style={{display:"none"}} className="calendar" id="monthly">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;