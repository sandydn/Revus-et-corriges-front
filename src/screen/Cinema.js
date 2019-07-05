import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm';
import './Events.css'
import {Link} from 'react-router-dom';


class Cinema extends Component {
    render() {
        return (
            <div className='screenCinema'>
                <MenuAdmin />
                <Link to="/form-cinema"><ButtonForm name="Ajouter un cinéma" /></Link>
            </div>
        )
    }
}

export default Cinema
