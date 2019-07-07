import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom'
import '../screen/Events.css'
// import ListEvent from '../components/ListEvent';

class Events extends Component {

    render() {
        return (
            <div className='screenEvent'>
            <MenuAdmin />
            <Link to="/admin-events-form"><ButtonForm name="Ajouter un évenement" /></Link>

        </div>
        )
    }
}

export default Events
