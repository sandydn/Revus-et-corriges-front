import React, {Component} from 'react'
// import WeekOfMonth from './weekOfMonth'
// import DaysOfMonth from './DaysOfMonth'
import moment from "moment"
import 'moment/locale/fr';
import 'moment-timezone';
// import { range } from "moment-range"
import axios from 'axios';



class Monthly extends Component {

  weekdayshort = moment.weekdaysShort();

  europeWeek = moment.updateLocale("fr", { week: {
    dow: 1, // First day of week is Monday
    doy: 4  // First week of year must contain 4 January (7 + 1 - 4)
  }});
  
  

    state= {
        days:[],
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
      // console.log(resultat);
      
      this.setState({eventDate: resultat.data}, () => {

        // console.log(this.state.eventDate)
      })
    }


    componentDidMount(){
      
      this.getData()
      // this.setState({days: dataTestMonth1})
    }

    // previousMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id <5)})
    // }

    // nextMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id >4)})
    // }

    // week = this.state.days.map((day) => <DaysOfMonth date={day.date} dataEvent={day.data} />)

    
    daysInMonth = () => {
      return this.state.dateObject.daysInMonth();
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
        .format("d"); // Day of week 0...1..5...6
      return firstDay;
    };
    
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

    MonthList = props => {
      let months = [];
      props.data.map(data => {
        months.push(
          <div
            key={data}
            className="calendar-month"
            onClick={e => {
              this.setMonth(data);
            }}
          >
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

    showYearTable = e => {
      this.setState({
        showYearTable: !this.state.showYearTable,
        showDateTable: !this.state.showDateTable
      });
    };
  
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
    };

    setYear = year => {
      // alert(year)
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

    YearTable = props => {
      let months = [];
      let nextten = moment()
        .set("year", props)
        .add("year", 12)
        .format("Y");
  
      let tenyear = this.getDates(props, nextten);
  
      tenyear.map(data => {
        months.push(
          <div
            key={data}
            className="yearTable"
            onClick={e => {
              this.setYear(data);
            }}
          >
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
      let yearlist = rows.map((d, i) => {
        return <div>{d}</div>;
      });
  
      return (

        <div className="">
              {yearlist}
        </div>
      );
    };

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
    
    
   render() {

    
    let weekdayshortname = this.weekdayshort.map(day => {
      return <div key={day}>{day}</div>;
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<div className=" ">{""}</div>);
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      let dayEvent = false

      this.state.eventDate.map( event => {
        // console.log(event);
        const eventDateStart = moment(event.dateStart).format("D")
        console.log(eventDateStart, 'eventDateStart');
        
        if (d == eventDateStart) {
          return dayEvent = true
        } else {
          return dayEvent = false;
        }
        // event.moment(event.dateStart,"D DD")
        // if (d === event.dateStart) {
        //   return dayEvent = true;
        // } else {
        //   return dayEvent = false;
        // }
        }
      )
      const calendarDay = dayEvent ? 'calendar-day-event' : 'calendar-day-not-event'
      console.log(dayEvent, calendarDay);
      
      daysInMonth.push(
        <div key={d} className = { `${calendarDay} ${currentDay}`} >
        {/* // <div key={d} className={`calendar-day ${currentDay}`}> */}
          <h3
            onClick={e => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </h3>
        </div>
      )
    }

    let totalSlots = [...blanks, ...daysInMonth];
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
        // let insertRow = cells.slice();
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <h3>{d}</h3>;
    });

    return (
      
      <div className="monthly">
        <div className="monthAndYear">
          <span
            onClick={e => {
              this.onPrev();
            }}
            class=" button-prev"
          />
          {!this.state.showMonthTable && (
            <div
              onClick={e => {
                this.showMonth();
              }}
              class="month"
            >
              {this.month()}
            </div>
          )}
          <div className="year" onClick={e => this.showYearTable()}>
            {this.year()}
          </div>
           <span
          onClick={e => {
            this.onNext();
          }}
          className=" "
        />
        </div>
       
        <div className="calendar-date">
          {this.state.showYearTable && <this.YearTable props={this.year()} />}
          {this.state.showMonthTable && (
            <this.MonthList data={moment.months()} />
          )}
        </div>

        {this.state.showDateTable && (
          <div className="calendar-date">
              <div className="arrows">
                <div className="leftArrow" onClick={this.onPrev}><i class="arrow left"></i></div>
                <div className="monthList" onClick={this.showMonth}><p> Select a month </p></div>
                <div className="yearList" onClick={this.showYearTable}><p> Select a year </p></div>
                <div className="rightArrow" onClick={this.onNext}><i class="arrow right"></i></div>
              </div>

               <h1 className="monthlyDisplay">{weekdayshortname}</h1>
              
              <div className="dayzOfWeek">{daysinmonth}</div>
          
          </div>
        
      
    )
  }
           
             </div>
         )
     }
 }





export default Monthly