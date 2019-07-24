import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ButtonForm from '../elements/ButtonForm'
import DisplayEvent from '../components/DisplayEvent'
import MenuAdmin from './MenuAdmin'
import '../screen/Events.css'

class Events extends Component {

    state = {
        results: {}
    }

    render() {
        return (
            <div  className='screenEvent'>
                <div>
                <a href='#displayAdminEvent'><i className="down"></i></a>
                    <MenuAdmin />
                    <Link to="/admin-events-form"><ButtonForm name="Ajouter un évenement" /></Link>
                </div>
                <div className="displayData" id='displayAdminEvent'>
                    <DisplayEvent />
                </div>
            </div>
        )
    }
}

export default Events
