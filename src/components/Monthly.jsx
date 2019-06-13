import React, {Component} from 'react'
import WeekOfMonth from './weekOfMonth'
import DaysOfMonth from './DaysOfMonth'
import dataTestMonth1 from "./dataTestMonth1.json"
// import moment from "moment"

class Monthly extends Component {
    state= {
        days:[],
        // dateObject: moment()
    }

    // weekdayshort = moment.weekdaysShort();
    


    componentDidMount(){
      this.setState({days: dataTestMonth1})
    }

    // previousMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id <5)})
    // }

    // nextMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id >4)})
    // }

    week = this.state.days.map((day) => <DaysOfMonth date={day.date} dataEvent={day.data} />)
    
    
   render() {

//     const totalSlots = [...firstDayOfMonth, ...daysInMonth];
//     let rows = [];
//     let cells = [];

//     firstDayOfMonth = () => {
//       let dateObject = this.state.dateObject;
//       let firstDay = moment(dateObject)
//                    .startOf("month")
//                    .format("d"); 
//      return firstDay;
//   };

//      daysInMonth = () => {
//     let dateObject = this.state.dateObject;
//     let DayDay = moment(dateObject)
//                  .startOf("month")
//                  .format("d"); 
//    return DayDay;
// };

  
//   let weekdayshortname = this.weekdayshort.map(day => {
//     return (
//       <th key={day} className="week-day">
//          {day}
//         </th>
//       );
//     });
    
//     let firstDayOfMonth = [];
//       for (let i = 0; i < this.firstDayOfMonth(); i++) {
//         firstDayOfMonth.push(
//           <td className="calendar-day empty">{""}</td>
//         );
//       }
  
//       let daysInMonth = [];
//       for (let d = 1; d <= this.daysInMonth(); d++) {
//         daysInMonth.push(
//           <td key={d} className="calendar-day">
//             {d}
//           </td>
//         );
//       }

//       totalSlots.forEach((row, i) => {
//         if (i % 7 !== 0) {
//           cells.push(row); // if index not equal 7 that means not go to next week
//         } else {
//           rows.push(cells); // when reach next week we contain all td in last week to rows 
//           cells = []; // empty container 
//           cells.push(row); // in current loop we still push current row to new container
//         }
//         if (i === totalSlots.length - 1) { // when end loop we add remain date
//           rows.push(cells);
//         }
//       });

//       let daysinmonth = rows.map((d, i) => {
//         return <tr>{d}</tr>;
//       });
  

        return (

            <div className='monthly'>
                <div className='monthlyHead'>
                    <h1>Agenda Mars 2019</h1>
                </div>

                <div className="dayzOfWeek">
                  <h1>LUNDI</h1>
                  <h1>MARDI</h1>
                  <h1>MERCREDI</h1>
                  <h1>JEUDI</h1>
                  <h1>VENDREDI</h1>
                  <h1>SAMEDI</h1>
                  <h1>DIMANCHE</h1>
                </div>

                <div  className='monthlyDisplay'>
                {/* <table className="calendar-day">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table> */}
                    {/* <div onClick={this.previousMonth}><i class="arrow left"></i></div> */}
                    <WeekOfMonth dataDays={this.state.days}  />
                    {/* <div onClick={this.nextMonth}><i class="arrow right"></i></div> */}
                </div>
            </div>
        )
    }
}





export default Monthly