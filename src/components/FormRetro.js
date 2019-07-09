import React, { Component } from 'react'
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar'
import { Link } from 'react-router-dom';
import MenuAdmin from '../screen/MenuAdmin';

import './Form.css';

class FormRetro extends Component {
  state = {
    dateStart: null,
    nom: null,
    prenom: null,
    type: null,
    link: null,
    importance: null,
    titre: null,
    cover: null,
  }


  handleChangeInput = (keyState, evt) => {
    console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value })
  }

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
        dateStart,
        nom,
        prenom,
        type,
        link,
        titre,
        cover,
    } = this.state

    return (
      <div className="screen">
      <MenuAdmin />
      <div className="Formretro">
        <p>Date de debut :</p>
        <InputWithCalendar
          date={dateStart}
          onChangeDate={this.onChangeDateStart}
        />

        <div className="importance">
          <p>Importance </p>
          <CheckboxLine title="r&c" keyState="importance" value={0} funct={this.handleChangeInput}/>
          <CheckboxLine title="partenaires" keyState="importance" value={1} funct={this.handleChangeInput}/>
          <CheckboxLine title="général" keyState="importance" value={3} funct={this.handleChangeInput} />
        </div>

        <InputInLine
          keyState="titre"
          title="Titre"
          value={titre}
          funct={this.handleChangeInput}
        />

        <div className="contact">
          <p className="Role-contact">Distributeur</p>
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
            <CheckboxLine title="Acteur" keyState="type" value={0} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Distributeur" keyState="type" value={1} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Editeur" keyState="type" value={2} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Réalisateur" keyState="type" value={3} funct={this.handleChangeCheckbox} />
          </div>
        </div>

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
            <CheckboxLine title="Acteur" keyState="type" value={0} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Distributeur" keyState="type" value={1} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Editeur" keyState="type" value={2} funct={this.handleChangeCheckbox} />
            <CheckboxLine title="Réalisateur" keyState="type" value={3} funct={this.handleChangeCheckbox} />
          </div>
        </div>

        <InputInLine
          keyState="link"
          title="lien externe"
          value={link}
          funct={this.handleChangeInput}
        />

        <InputInLine
          keyState="cover"
          title="cover"
          value={cover}
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
      </div>
    )
  }
}

export default FormRetro
