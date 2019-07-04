import React from 'react'

const MobileDays = ({ date, selector }) => {
    const numberOnly = date.split(' ')

    return (
        <h1 className={date} onClick={selector}>{numberOnly[0]}</h1>
    )
}

export default MobileDays