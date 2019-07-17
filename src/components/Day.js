import React from 'react'
import Events from './Events'
import './css/Day.css'

// import moment from "moment"
// import 'moment/locale/fr';
// import 'moment-timezone';



const Day = ({ date, dataEvent, stateClass }) => {
    const nameClass = `day${stateClass}`

    return (
        <div className={nameClass}>
            <h1>{date}</h1>
            <div className='line'></div>
            <Events dataEvent={dataEvent} />
        </div>
    )
}

export default Day