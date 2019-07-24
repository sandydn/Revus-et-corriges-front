import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ButtonForm from '../elements/ButtonForm'
import MenuAdmin from './MenuAdmin'
import '../screen/Events.css'

class Cinema extends Component {

    render() {
        return (
            <div>
                <div className='screenCinema'>
                    <MenuAdmin />
                    <Link to="/admin-cinema-form"><ButtonForm name="Ajouter un cinéma" /></Link>
                </div>
            </div>    
        )
    }
}

export default Cinema
