import React from 'react'
import Day from './Day'

const Week = ({dataDays}) => {
    return(
        dataDays.map((day) => <Day date={day.date} dataEvent={day.data} stateClass='Desktop' />)
    )
}

export default Week
