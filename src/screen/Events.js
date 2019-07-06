import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ButtonForm from '../components/ButtonForm'
import MenuAdmin from './MenuAdmin';
import '../screen/Events.css'

// import ListEvent from '../components/ListEvent';
import Form from '../components/Form';

class Events extends Component {

    render() {
        return (
            <div className='screenEvent'>
            <MenuAdmin/>
            <Link to="/form"><ButtonForm name="Ajouter un évenement" /></Link>

        </div>
        )
    }
}

export default Events
