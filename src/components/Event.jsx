import React from 'react'

const Event = ({title, comment, picture}) => {
    const picEvent =() =>{

        if (picture === ""){
            return ""
        } else {
            return {title}
        }
    }
    
    return( 
        <div className='event'>
        <h2>{title}</h2>
        <p>{comment}</p>
        <img src={picture} alt={picEvent} />
        </div>
    )
}

export default Event