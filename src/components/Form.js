import React, { Component } from 'react';
import InputInLine from './InputInLine';
import Checkboxline from './CheckboxLine';
import Dropdown from './Dropdown';
import './Form.css';
import Dropdown from './Dropdown';
import InputWithCalendar from './InputWithCalendar'


class Form extends Component {
    state = {
        date1: null,
        date2: null,
        titre: null,
        lieu: null,
        date: null,
        lien: null,
        information: null,
        realisateur: null,
        datefilm: null,
        distributeur: null,
        format: null,
        editeur: null,
        visuel: null,
        date: new Date()
    }

    handleChangeInput = (keyState, evt) => {
        console.log("keyState",keyState, "evt",evt.target.value)
        this.setState({ [keyState] : evt.target.value })
    }

    handleChangeDropdown = (keyState, evt) => {
        this.setState({ [keyState] : evt.target.value})
    }
    

    onChangeDate = date => this.setState({ date })


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


            <InputWithCalendar  date={this.state.date} onChangeDate={this.onChangeDate} />
                
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
            <InputInLine
                keyState="realisateur"
                title="réalisateur"
                value={realisateur}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="datefilm"
                title="Date du film"
                value={datefilm}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="distributeur"
                title="Distributeur"
                value={distributeur}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="format"
                title="format"
                value={format}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="editeur"
                title="éditeur"
                value={editeur}
                funct={this.handleChangeInput}
            />
            <InputInLine    
                keyState="visuel"
                title="visuel"
                value={visuel}
                funct={this.handleChangeInput}
            />

            {/* <Dropdown /> */}

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