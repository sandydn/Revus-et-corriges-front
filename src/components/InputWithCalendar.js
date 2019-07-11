import React, { Component } from 'react'
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import fr from 'date-fns/locale/fr';

import "react-datepicker/dist/react-datepicker.css"
registerLocale('fr', fr)
  
class InputWithCalendar extends Component {


  render() {

    
    return (
      
      <div>

        <DatePicker
          dateFormat="dd/MM/yyyy"
          locale="fr"
          onChange={this.props.onChangeDate}
          selected={this.props.date}
        />

      </div>
    )
  }
}
export default InputWithCalendar