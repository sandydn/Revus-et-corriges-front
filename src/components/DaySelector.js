import React from 'react'
import MobileDays from './MobileDays'

const DaySelector = ({dataDays, selector}) => {
    const days = dataDays.map((day)=> <MobileDays date={day.date} selector={selector}/>)
    return(
        <div className='days'>
            {days}
        </div>
    )
}

export default DaySelector