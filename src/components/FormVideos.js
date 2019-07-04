import React, { Component } from 'react'
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar'
import { Link } from 'react-router-dom';

import './Form.css';

class FormVideos extends Component {
  state = {
    dateCreation: null,
    dateStart: null,
    // Editeur: [nom, prenom, type],
    nom: null,
    prenom:null,
    type:null,
    format: null,
    général: null,
    lien: null,
    partenaires: null,
    rc: null,
    // Realisateur: [nom, prenom, type ],
    titre: null,
    visuel: null,
  }

  handleChangeInput = (keyState, evt) => {
    console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value })
  }

  // handleChangeCheckbox = (keyState, evt) => {
  //   this.setState({ [keyState]: evt.target.value})
  // }

  handleChangeDropdown = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  onChangeDateStart = dateStart => {
    if (dateStart > this.state.dateEnd && this.state.dateEnd) {
      return console.log('error')
    }
    console.log('test');

    this.setState({ dateStart })
  }

  onChangeDateEnd = dateEnd => {
    if (dateEnd < this.state.dateStart) {
      return console.log('error')
    }
    console.log('test');

    this.setState({ dateEnd })
  }

  componentDidMount() {
    console.log('didmount', this.state);

  }

  render() {
    const {
      dateCreation,
      dateStart,
      // Editeur: [nom, prenom, type ],
      nom,
      prenom,
      type,
      format,
      général,
      lien,
      partenaires,
      rc,
      // Realisateur: [ nomreal, prenomreal, typereal ],
      titre,
      visuel,
    } = this.state

    return (
      <div className="Formvideos">
        <p>Date de debut :</p>
        <InputWithCalendar
          date={dateStart}
          onChangeDate={this.onChangeDateStart}
        />

        <div className="importance">
          <p>Importance </p>
          <CheckboxLine title="r&c" keyState="rc" value={rc} funct={this.handleChangeCheckbox}/>
          <CheckboxLine title="partenaires" keyState="partenaires" value={partenaires} funct={this.handleChangeCheckbox}/>
          <CheckboxLine title="général" keyState="général" value={général} funct={this.handleChangeCheckbox} />
        </div>

        <InputInLine
          keyState="titre"
          title="Titre"
          value={titre}
          funct={this.handleChangeInput}
        />

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

        <div className="contact">
          <p className="Role-contact">Réalisateur</p>
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
            <CheckboxLine title="Acteur" keyState="type" value={type} funct={this.handleChangeCheckbox}/>
            <CheckboxLine title="Distributeur" keyState="type" value={type} funct={this.handleChangeCheckbox}/>
            <CheckboxLine title="Editeur" keyState="type" value={type} funct={this.handleChangeCheckbox}/>
            <CheckboxLine title="Réalisateur" keyState="type" value={type} funct={this.handleChangeCheckbox}/>
          </div>
        </div>

        <div className="contact">
          <p className="Role-contact">Editeur</p>
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
            <CheckboxLine title="Acteur" keyState="type" value={type} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Distributeur" keyState="type" value={type} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Editeur" keyState="type" value={type} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Réalisateur" keyState="type" value={type} funct={this.handleChangeCheckbox} />
          </div>
        </div>

        <InputInLine
          keyState="lien"
          title="lien externe"
          value={lien}
          funct={this.handleChangeInput}
        />

        <InputInLine
          keyState="visuel"
          title="visuel"
          value={visuel}
          funct={this.handleChangeInput}
        />

        <Link to="/admin">
          <input
            className="button-submit"
            type="submit"
            value="Valider le formulaire"
          />
        </Link>
      </div>
    )
  }
}

export default FormVideos
