import React, {Component} from 'react'
import './calendar.css'
import Weekly from "./Weekly"

class Calendar extends Component{
    render(){
        return(
            <div className='Calendar'>
                <div className='navbar'><p>navbar</p></div>
                <Weekly />
            </div>
        )
    }
}

export default Calendar