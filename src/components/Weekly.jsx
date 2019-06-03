import React from 'react'
import Day from './Day'
import dataTest from "./dataTest.json"

const Weekly = () => {
    const week = dataTest.map((day) => <Day date={day.date} dataEvent={day.data} />)
    return (
        <div className='weekly'>
            <div className='weeklyHead'>
                <h1>Agenda Mars 2019</h1>
            </div>
            <div className='weeklyDisplay'>
                {week}
            </div>
        </div>
    )
}

export default Weekly