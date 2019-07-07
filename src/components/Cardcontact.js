import React, { Component } from 'react'
import InputContact from './InputContact';
import CheckboxContact from './CheckboxContact';

import './css/Cardcontact.css'

class Cardcontact extends Component {
    state = {
        prenom: null,
        nom: null,
    }
    render() {
        const {
            prenom,
            nom,
        } = this.state
        return (

        <div className="contact">
          <p className="Role-contact"></p>
          <InputContact
            keyState="prenom"
            title="prénom"
            value={prenom}
            funct={this.handleChangeInput}
          />
          <InputContact
            keyState="nom"
            title="nom"
            value={nom}
            funct={this.handleChangeInput}
          />
          <div className="type-contact">
            <CheckboxContact title="Acteur" keyState="type" value={0} funct={this.handleChangeInput}/>
            <CheckboxContact title="Distributeur" keyState="type" value={1} funct={this.handleChangeInput}/>
            <CheckboxContact title="Editeur" keyState="type" value={2} funct={this.handleChangeInput}/>
            <CheckboxContact title="Réalisateur" keyState="type" value={3} funct={this.handleChangeInput}/>
          </div>
                
            </div>
        )
    }
}

export default Cardcontact
