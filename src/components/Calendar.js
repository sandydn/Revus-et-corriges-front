import React, {Component} from 'react'

import {Link} from 'react-router-dom';

class Calendar extends Component{
    render(){
        return(
            <div>
            <Link to="/select-form" ><input type="submit" value="Admin" /></Link>
            <Link to="/login" ><input type="submit" value="Login" /></Link>
            </div>
            
        )
    }
}

export default Calendar
