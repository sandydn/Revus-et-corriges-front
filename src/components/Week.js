import React from 'react'
import Day from './Day'

const Week = ({dataDays}) => {
    
    return(
         dataDays.map((day) =>  <Day key={day.data.id} date={day.data.date} dataEvent={day.data} />)
    )
}

export default Week
