import React, { Component } from 'react';
import InputInLine from './InputInLine';
import Checkboxline from './CheckboxLine';
import './Form.css';

class Form extends Component {
    
    state = {
        date1: null,
        date2: null,
        titre: null,
        lieu: null,
        date: null,
        lien: null,
        information: null,
    }

    handleChangeInput = (keyState, evt) => {
        this.setState({ [keyState] : evt.target.value })
    }
    
    render() {
        const {
            date1,
            date2,
            titre,
            lieu,
            date,
            lien,
            information
        } = this.state
        console.log(this.state)
        return (
            <div>
                <InputInLine
                keyState="date1"
                title="Date de début"
                value={date1}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="date2"
                title="Date de début"
                value={date2}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="titre"
                title="Titre"
                value={titre}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="lieu"
                title="Lieu"
                value={lieu}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="date"
                title="Date"
                value={date}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="lien"
                title="lien externe"
                value={lien}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="information"
                title="information"
                value={information}
                funct={this.handleChangeInput}
            />
            <div className="checkbox">
            <Checkboxline title="r&c"/>
            <Checkboxline title="partenaires" />
            <Checkboxline title="général"/>
            </div>
        </div>
        )
    }
}

export default Form
