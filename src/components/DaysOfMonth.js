import React from 'react'
import Events from './Events'
// import './DaysOfMonth.css'


const DaysOfMonth = ({date, dataEvent}) => {
    return(
        <div className='DayzDisplay'>
            <h1>{date}</h1>
            <div className='line'></div>
            <Events dataEvent={dataEvent}/>
        </div>
    )
}

export default DaysOfMonth