import React from 'react'
import MobileDays from './MobileDays'

const DaySelector = ({dataDays}) => {

    return(
        
        dataDays.map((day)=> <MobileDays date={day.date}/>)
    )
}

export default DaySelector