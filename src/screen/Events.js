import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom'
import '../screen/Events.css'

class Events extends Component {
    render() {
        return (
            <div className='screenEvent'>
            <SelectionForm />
            <Link to="/formevent"><ButtonForm name="Ajouter un évenement" /></Link>
        </div>
        )
    }
}

export default Events
