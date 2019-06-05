import React, {Component} from 'react'
// import './calendar.css'
import './Monthly.css'
// import Weekly from "./Weekly"
import Monthly from "./Monthly"

class Calendar extends Component{
    render(){
        return(
            <div className='Calendar'>
                <div className='navbar'><p>navbar</p></div>
                {/* <Weekly />  */}
                <Monthly />
            </div>
        )
    }
}

export default Calendar