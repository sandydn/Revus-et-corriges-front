import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom';
import '../screen/Events.css'

class Retro extends Component {
    render() {
        return (
            <div className='screenRetro'>
                <MenuAdmin />
                <Link to="/form-retro"><ButtonForm name="Ajouter une rétrospective" /></Link>
            </div>
        )
    }
}

export default Retro
