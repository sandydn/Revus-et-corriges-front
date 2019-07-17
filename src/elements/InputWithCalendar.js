import React, { useEffect } from 'react'
import DatePicker from 'react-date-picker'
import { arrayOf } from 'prop-types';

const style = {
  general: {
    marginTop: '10px',
    padding: '5px',
    paddingRight: '50px'
  },
  span: {
    padding: '5px'
  }
}

const InputWithCalendar = ({ title, onChangeDate, date }) => {
  useEffect(() => {
    const input = document.getElementsByClassName('react-date-picker__wrapper')
    Array.from(input).forEach(e => {
      e.style.border = 'none'
      e.style.borderBottom = '1px solid black'
    })
  })
  return (
    <div style={style.general}>

      <span style={style.span}>
        {title || 'Default'} :
      </span>

      <DatePicker
        className="class-date-picker1"
        // dateFormat="d MMMM yyyy h:mm"
        // locale="fr"
        onChange={onChangeDate}
        value={date}
        // timeFormat="HH:mm"
        // timeIntervals={15}
      />

    </div>
  )
}

export default InputWithCalendar