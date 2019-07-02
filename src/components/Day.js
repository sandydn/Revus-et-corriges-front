import React from 'react'
import Events from './Events'
import './css/Day.css'


const Day = ({date, dataEvent}) => {

    return(
        
        <div className='Day'>
            <h1>{date}</h1>
            <div className='line'></div>
            <Events dataEvent={dataEvent}/>
        </div>
    )
}

export default Day