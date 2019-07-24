import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            <div>
                <a href='#displayAdminEvent' className='arrowDownAdmin'><i className="down"></i></a>
                <Link to="/admin-events-form" id='buttonEventForm'><ButtonForm name="Ajouter un évenement" /></Link>
                <MenuAdmin />
                <div className='screenEvent'>
                    <div className="displayData" id='displayAdminEvent'>
                        <DisplayEvent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Events
