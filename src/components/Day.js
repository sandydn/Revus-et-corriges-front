import React from 'react'
import Events from './Events'
import './Day.css'


const Day = ({date, dataEvent}) => {
    return(
        <div className='Day'>
            <h1>{date}</h1>
            <Events dataEvent={dataEvent}/>
        </div>
    )
}

export default Day