import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import ButtonForm from '../components/ButtonForm';
import './Cinema.css'
import {Link} from 'react-router-dom';


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
