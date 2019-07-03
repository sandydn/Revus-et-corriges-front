import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ButtonForm from '../components/ButtonForm';
import SelectionForm from './SelectionForm';
import './Cinema.css'


class Cinema extends Component {
    render() {
        return (
            <div className='screenCinema'>
                <SelectionForm />
                <Link to="/formcine"><ButtonForm name="Ajouter un cinéma" /></Link>
            </div>
        )
    }
}

export default Cinema
