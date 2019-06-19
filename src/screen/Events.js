import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import ButtonForm from '../components/ButtonForm'

class Events extends Component {
    render() {
        return (
            <div className="container-screen">
                <SelectionForm />
                <ButtonForm name="Ajouter un évenement" />
            </div>
        )
    }
}

export default Events
