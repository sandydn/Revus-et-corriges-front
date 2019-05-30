import React from 'react'
import Day from './Day'
import dataTest from "./dataTest.json"

const Weekly = () => {
    return(
        dataTest.map((day) => <Day date={day.date} dataEvent={day.data}/>)
    )
}

export default Weekly