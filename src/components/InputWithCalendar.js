import React, { Component } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
  
class inputWithCalendar extends Component {


  render() {

    
    return (
      
      <div>

        <DatePicker
          selected={this.props.date}
          onChange={this.props.onChangeDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />

      </div>
    )
  }
}
export default inputWithCalendar