import React from 'react'
import Event from './Event'


const Events = ({dataEvent}) => {
    
    return(
        dataEvent.map((one) => 
       
        <Event title=
            {one.titre} 
            comment={one.description}  
            picture={one.cover}
            type={one.importance} 
        />
        )
    )
}

export default Events