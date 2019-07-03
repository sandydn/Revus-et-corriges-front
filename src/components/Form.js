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
        dateStart: null,
        format: null,
        information: null,
        lien: null,
        lieu: null,
        nom: null,
        prenom: null,
        titre: null,
        visuel: null,
        //date: null,
         //dateStart: null,
        //dateEnd: null
    }

    handleChangeInput = (keyState, evt) => {
        console.log("keyState",keyState, "evt",evt.target.value)
        this.setState({ [keyState] : evt.target.value })
    }

    handleChangeDropdown = (keyState, evt) => {
        this.setState({ [keyState] : evt.target.value})
    }
    
    onChangeDateStart = dateStart => {
        if (dateStart > this.state.dateEnd && this.state.dateEnd){
            return console.log('error')
        }
        console.log('test');
        
        this.setState ({ dateStart })
    }

    onChangeDateEnd = dateEnd => {
        if (dateEnd < this.state.dateStart ){
            return console.log('error')
        }
        console.log('test');
        
        this.setState ({ dateEnd })
    }
    
    componentDidMount() {
        console.log('didmount',this.state);
        
    }
    

    render() {
        const {
            dateCreation,
            dateEnd,
            dateStart,
            format,
            information,
            lien,
            lieu,
            nom,
            prenom,
            titre,
            visuel,
            //date,
        } = this.state
        console.log(this.state)
        return (
            <div>

            <p>Date de debut</p>
            <InputWithCalendar  
                date={dateStart} 
                onChangeDate={this.onChangeDateStart} 
            />

            <p>Date de fin</p>
            <InputWithCalendar  
                date={dateEnd} 
                onChangeDate={this.onChangeDateEnd} 
            />
{/*                 
            <InputInLine
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
            
            {/* <InputInLine
                keyState="date"
                title="Date"
                value={date}
                funct={this.handleChangeInput}
            /> */}
            
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
            
            <div>
                <InputInLine
                    keyState="prenom"
                    title="prenom"
                    value={prenom}
                    funct={this.handleChangeInput}
                />

                <InputInLine
                    keyState="nom"
                    title="nom"
                    value={nom}
                    funct={this.handleChangeInput}
                />
               
                <CheckboxLine title="Acteur" />
                <CheckboxLine title="Distributeur" />
                <CheckboxLine title="Editeur" />
                <CheckboxLine title="Realisateur" />
            
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

            {/* <Dropdown /> */}

        </div>
        )
    }
}

export default Form
