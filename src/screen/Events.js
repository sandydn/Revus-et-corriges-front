import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ButtonForm from '../components/ButtonForm'
import Delete from '../components/Delete';
import DeleteForm from '../components/DeleteForm'
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
            <div  className='screenEvent'>
                <div>
                    <MenuAdmin />
                    <Link to="/admin-events-form"><ButtonForm name="Ajouter un évenement" /></Link>
                </div>
                <div>
                    <Delete />
                </div>
            </div>

        )
    }
}

export default Events
