import React from 'react'
import Day from './Day'
import DaySelector from './DaySelector'



const MobileWeek = ({ dataDays, dataEvent, date, previous, next, selector }) => {

    return (
        <div>
            <div className='daySelector'>
                <div onClick={previous} className='previousMobile'><i class="arrow left"></i></div>

                <DaySelector dataDays={dataDays} selector={selector} />

                <div onClick={next} className='nextMobile'><i class="arrow right"></i></div>
            </div>
            <Day date={date} dataEvent={dataEvent} stateClass='Mobile' />
        </div>
    )
}

export default MobileWeek