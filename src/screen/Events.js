import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DeleteForm from '../components/DeleteForm'
import DisplayEvent from '../components/DisplayEvent'
import ButtonForm from '../components/ButtonForm'
import Delete from '../components/Delete';
import MenuAdmin from './MenuAdmin';
import '../screen/Events.css'

// import ListEvent from '../components/ListEvent';
// import Form from '../components/Form';

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
