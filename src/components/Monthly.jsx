import React, {Component} from 'react'
import moment from "moment"
import axios from 'axios';
import { Link } from 'react-router-dom'

import 'moment/locale/fr';
import 'moment-timezone';


import Menu from './Menu.js'
import './css/calendar.css'

class Monthly extends Component {

  weekdayshort = moment.weekdays();
  

  state= {
    showYearTable: false,
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: null,
    eventDate: []
  }

  getData = async () => {
    const resultat = await axios.get('http://localhost:4000/a5/event')
    this.setState({eventDate: resultat.data}, () => {
    })
  }

  componentDidMount(){

    this.getData()
  }

  componentDidUpdate(){

    this.displayDaysMonth()
  }
  
  daysInMonth = () => {

    return this.state.dateObject.daysInMonth("D");
  };
  year = () => {

    return this.state.dateObject.format("Y");
  };
  currentDay = () => {

    return this.state.dateObject.format("D");
  };

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");

    return firstDay;
  };

  displayDaysMonth = () => {
    const eventOfTheDay =  document.getElementsByClassName("calendar-day-event")
    if (eventOfTheDay) {eventOfTheDay.className = "calendar-day-not-event"}}
    
  month = () => {

    return this.state.dateObject.format("MMMM");
  };
  
  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  //FUNCTION FOR MONTHLIST OF A YEAR
  MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <div key={data} className="calendar-month" onClick={e => {this.setMonth(data)}}>       

          <span>{data}</span>

        </div>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);
    let monthlist = rows.map((d, i) => {

      return <div>{d}</div>;
    });

    return (
      <div className="calendar-month">  

        <h1>{monthlist}</h1>

        </div>     
    );
  };
  //END OF FUNCTION

  showYearTable = e => {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showDateTable: !this.state.showDateTable
    });
  };

  //FUNCTION FOR PREVIOUS MONTHS
  onPrev = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr)
    });
  };
  //END OF FUNCTION

  //FUNCTION FOR NEXT MONTHS
  onNext = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr)
    });
    let daysInMonth = [];
  for (let d = 1; d <= this.daysInMonth(); d++) {
    let currentDay = d == this.currentDay() ? "today" : "";
    let dayEvent = false
    this.state.eventDate.forEach( event => {
      const eventDateStart = moment(event.dateStart).format("D")       
      if (d == eventDateStart) {

        return dayEvent = true
      }
    })
    const calendarDay = dayEvent ? 'calendar-day-event' : 'calendar-day-not-event'   
    daysInMonth.push(
      <div key={d} className = { `${calendarDay} ${currentDay}`}>

        <h3 onClick={e => {this.onDayClick(e, d)}}>{d}</h3>

      </div>
    )
  }
  };
  //END OF FUNCTION

  setYear = year => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearTable: !this.state.showYearTable
    });
  };

  onYearChange = e => {
    this.setYear(e.target.value);
  };
  
  getDates(startDate, stopDate) {
    let dateArray = [];
    let currentDate = moment(startDate);
    let dateStop = moment(stopDate);
    while (currentDate <= dateStop) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }

    return dateArray;
  }
  
  //FUNCTION FOR YEARLIST ON 10 YEARS
  YearTable = props => {
    let months = [];
    let nextten = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

    let tenyear = this.getDates(props, nextten);

    tenyear.map(data => {
      months.push(
        <div key={data} className="yearTable" onClick={e => {this.setYear(data)}}>

          <span>{data}</span>     

        </div>
      )
    })
  
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);
    let yearlist = rows.map((d, i) => {

      return <div>{d}</div>;
    });

    return (
      <div> {yearlist} </div>
    );
  }
  //END OF FUNCTION

  //FUNCTION FOR CLICK ON EVENT
  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d
      },
      () => {
        console.log("SELECTED DAY: ", this.state.selectedDay);
      }  
    );
  };
  //END OF FUNCTION

  render() {
  
  //DISPLAY DAYS  
  let weekdayshortname = this.weekdayshort.map(day => {

    return <div className="weekDisplay" key={day}>{day}</div>;
    
  });
  //END OF DISPLAY

  let blanks = [];
  for (let i = 0; i < this.firstDayOfMonth(); i++) {
    blanks.push(<div>{""}</div>);
  }

  //FUNCTION FOR CURRENT DAY AND DISPLAY EVENT OR NOT
  // let years = [];
  // let months =[];
  // let daysInMonth = [];
  // for (let y = 1; y <= this.years(); y++){
  //   for (let m = 1; m <= this.months(); m++) {
  //     for (let d = 1; d <= this.daysInMonth(); d++) {
  //       let currentDay = d == this.currentDay() ? "today" : "";
  //       let dayEvent = false
  //       this.state.eventDate.map( event => {
  //       const eventDateStart = moment(event.dateStart).format("D")
  //       if (d == eventDateStart) {

  //       return dayEvent = true
  //     }
  //   })
  //   const calendarDay = dayEvent ? 'calendar-day-event' : 'calendar-day-not-event'   
  //   daysInMonth.push(
  //     <div key={d} className = { `${calendarDay} ${currentDay}`}>

  //     let dayzInMonth = [];
  //     for (let d = 1; d <= this.daysInMonth(); d++) {
  //       let currentDay = d == this.currentDay() ? "today" : "";
  //       let dayEvent = false
  //       this.state.eventDate.map( event => {
  //         const eventDateStart = moment(event.dateStart).format("D")       
  //         if (d == eventDateStart) {

  //           return dayEvent = true
  //         }
  //       })
  //       const calendarDay = dayEvent ? 'calendar-day-event' : 'calendar-day-not-event'   
  //       dayzInMonth.push(
  //         <div key={d} className = { `${calendarDay} ${currentDay}`}>

  //           <h3 onClick={e => {this.onDayClick(e, d)}}>{d}</h3>

  //         </div>
  //       )
  // }

  //     </div>
  //     )
  //   } 
//   }
// }
  //END OF FUNCTION

  let totalSlots = [...blanks, ...dayzInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }

    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {

    return <h3>{d}</h3>;
  });

  return (
    <div className="calendar">

      <div className="navbar">
      <Menu />
      <Link to="/"><input type="submit" value="Weakly" /></Link>
      </div>
      <div className="monthly">
        <div className="monthAndYear">
          <span onClick={e => {this.onPrev()}} class=" button-prev"/>         
          {!this.state.showMonthTable && (
            <div onClick={e => {this.showMonth()}} class="month">{this.month()}              
            </div>
          )}

          <div className="year" onClick={e => this.showYearTable()}>
          {this.year()}
          </div>
            <span onClick={e => {this.onNext()}} className=" "/>    
          </div>
      
        <div className="calendar-date">
          {this.state.showYearTable && <this.YearTable props={this.year()}/>}
          {this.state.showMonthTable && (<this.MonthList data={moment.months()}/>
          )}
        </div>

        {this.state.showDateTable && (
          <div className="calendar-date">

            <div className="arrow">

              <div className="leftArrow" onClick={this.onPrev}><i class="arrow left"></i></div>

              <div className="monthList" onClick={this.showMonth}><p> Changer de mois </p></div>

              <div className="yearList" onClick={this.showYearTable}><p> Changer d'année </p></div>

              <div className="rightArrow" onClick={this.onNext}><i class="arrow right"></i></div>

            </div>
            
            <h1 className="monthlyDisplay">{weekdayshortname}</h1>  

            <div className="dayzOfWeek">{daysinmonth}</div>    

        </div>              
  )
}           
            </div>

            </div>
        )
    }
  }

export default Monthly