import React from 'react'

const Event = ({title, comment, picture, type}) => {
    const picEvent =() =>{

        if (picture === ""){
            return ""
        } else {
            return {title}
        }
    }
    
    const typeEvent = `event ${type}`
    
    
    return( 
        <div className={typeEvent}>
        <h2>{title}</h2>
        <p>{comment}</p>
        <img src={picture} alt={picEvent} />
        </div>
    )
}

export default Event