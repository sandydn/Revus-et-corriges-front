import React, { Component } from 'react'
import './dataTestMonth.json';
import Event from './Event'


const ListEvent = ({dataEvent}) => {

        return (
            <div>
                 dataEvent.map((one) => <Event title={one.title} 
                                     comment={one.comment}  
                                     picture={one.picture}
                                     type={one.type} />)
            </div>

        )
    }

export default ListEvent
