import React from 'react'
import DaysOfMonth from './DaysOfMonth'

const WeekOfMonth =({dataDays})=>{
    return(
        dataDays.map((day) => <DaysOfMonth date={day.date} dataEvent={day.data} />)
    )
}

export default WeekOfMonth