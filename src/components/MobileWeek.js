import React from 'react'
import DaySelector from './DaySelector';
import Day from './Day';


const MobileWeek = ({ dataDays, dataEvent, date }) => {

    return (
        <div>
            <div className='daySelector'>
                <DaySelector dataDays={dataDays} />
            </div>
            <Day date={date} dataEvent={dataEvent} />

        </div>
    )

}

export default MobileWeek