import React, { Component } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)
  
class InputWithCalendar extends Component {


  render() {

    
    return (
      
      <div>

        <DatePicker
          dateFormat="d MMMM yyyy h:mm aa"
          locale="fr"
          onChange={this.props.onChangeDate}
          selected={this.props.date}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
        />

      </div>
    )
  }
}
export default InputWithCalendar