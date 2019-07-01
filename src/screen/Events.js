import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom'
import '../screen/Events.css'
// import ListEvent from '../components/ListEvent';
import InputInLine from '../components/InputInLine';

class Events extends Component {
    state = {
        date1: null
    }

    handleChangeInput = (keyState, evt) => {
        this.setState({ [keyState] : evt.target.value })
    }

    render() {
        const {
            date1
        } = this.state
        return (
            <div className='screenEvent'>
            <SelectionForm />
            <Link to="/formevent"><ButtonForm name="Ajouter un évenement" /></Link>
            <InputInLine
                keyState="date1"
                title="Date de début"
                value={date1}
                funct={this.handleChangeInput}
            />
        </div>
        )
    }
}

export default Events
