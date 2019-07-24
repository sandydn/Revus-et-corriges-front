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
            <div>
                    <a href='#displayAdminEvent' className='arrowDownAdmin'><i className="down"></i></a>
                <MenuAdmin />
                <div className='screenEvent'>
                    <Link to="/admin-events-form"><ButtonForm name="Ajouter un évenement" /></Link>
                    <div className="displayData" id='displayAdminEvent'>
                        <DisplayEvent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Events
