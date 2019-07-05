import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom'
import '../screen/Events.css'
// import ListEvent from '../components/ListEvent';
import Form from '../components/Form';

class Events extends Component {

    render() {
        return (
            <div className='screenEvent'>
            <MenuAdmin />
            <Link to="/form-event"><ButtonForm name="Ajouter un évenement" /></Link>

        </div>
        )
    }
}

export default Events
