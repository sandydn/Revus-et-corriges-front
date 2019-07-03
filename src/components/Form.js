import React, { Component } from 'react';
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import './Form.css';
import Dropdown from './Dropdown';
import InputWithCalendar from './InputWithCalendar'


class Form extends Component {
    state = {
        dateCreation: null,
        dateEnd: null,
        dateStart: new Date(),
        format: null,
        information: null,
        lien: null,
        lieu: null,
        titre: null,
        nom: null,
        prenom: null,
        visuel: null,

    }

    handleChangeInput = (keyState, evt) => {
        console.log("keyState",keyState, "evt",evt.target.value)
        this.setState({ [keyState] : evt.target.value })
    }

    handleChangeDropdown = (keyState, evt) => {
        this.setState({ [keyState] : evt.target.value})
    }
    

    onChangeDateStart = dateStart => this.setState({ dateStart })
    onChangeDateEnd = dateEnd => this.setState({ dateEnd })

    render() {
        const {
        dateCreation,
        dateEnd,
        dateStart,
        format,
        information,
        lien,
        lieu,
        titre,
        nom,
        prenom,
        visuel,
        } = this.state
        console.log(this.state)
        return (
            <div className="Form">


            <p>Date de début</p><InputWithCalendar  date={dateStart} onChangeDate={this.onChangeDateStart} />
            <p>Date de fin</p><InputWithCalendar  date={dateEnd} onChangeDate={this.onChangeDateEnd} />  

            {/* <InputInLine
                keyState="dateStart"
                title="Date de début"
                value={dateStart}
                funct={this.handleChangeInput}
            />
            
            <InputInLine
                keyState="dateEnd"
                title="Date de fin"
                value={dateEnd}
                funct={this.handleChangeInput}
            /> */}
            
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
                keyState="lien"
                title="lien externe"
                value={lien}
                funct={this.handleChangeInput}
            />

            <div className="contact">
                <InputInLine
                keyState="prenom"
                title="prénom"
                value={prenom}
                funct={this.handleChangeInput}
                />
                <InputInLine
                keyState="nom"
                title="nom"
                value={nom}
                funct={this.handleChangeInput}
                />
                <div className="type-contact">
                    <CheckboxLine title="Acteur"/>
                    <CheckboxLine title="Distributeur"/>
                    <CheckboxLine title="Editeur"/>
                    <CheckboxLine title="Réalisateur"/>
                </div>    
            </div>


            <InputInLine
                keyState="dateCreation"
                title="Date du film"
                value={dateCreation}
                funct={this.handleChangeInput}
            />

            <InputInLine
                keyState="format"
                title="format"
                value={format}
                funct={this.handleChangeInput}
            />
            <InputInLine    
                keyState="visuel"
                title="visuel"
                value={visuel}
                funct={this.handleChangeInput}
            />
            <InputInLine
                keyState="information"
                title="information"
                value={information}
                funct={this.handleChangeInput}
            />

            {/* <Dropdown /> */}

            <div className="checkbox">
                <CheckboxLine title="r&c"/>
                <CheckboxLine title="partenaires" />
                <CheckboxLine title="général"/>
            </div>


        </div>
        )
    }
}

export default Form
