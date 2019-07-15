import React from 'react'
import Event from './Event'


const Events = ({dataEvent}) => {
    
    return(
        dataEvent.map((one) => 
        <Event title=
            {one.title} 
            comment={one.comment}  
            picture={one.picture}
            type={one.type} 
        />
        )
    )
}

export default Events