import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import ButtonForm from '../components/ButtonForm';


class Cinema extends Component {
    render() {
        return (
            <div>
                <SelectionForm />
                <ButtonForm name="Ajouter un cinéma" />
            </div>
        )
    }
}

export default Cinema
