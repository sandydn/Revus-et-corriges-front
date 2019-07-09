import React, { Component } from 'react'
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar'
import { Link } from 'react-router-dom';
import MenuAdmin from '../screen/MenuAdmin';

import './Form.css';

class FormCinema extends Component {
  state = {
    dateCreation: null,
    dateStart: null,
    // Distributeur: [nom, prenom, type],
    nom: [],
    prenom:[],
    type:[],
    importance: null,
    link: null,
    // Realisateur: [nom, prenom, type ],
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

  // componentDidMount() {
  //   console.log('didmount', this.state);
  //     axios.post(`http://localhost:4000/a5/event`)
  //     .then(result => {
  //         this.setState({ titre: result.data.titre, dateStart: result.data.dateStart, cover: result.data.cover, link: result.data.link })
  //     })
  // }

  render() {
    const {
        dateCreation,
        dateStart,
        // Distributeur: [nom, prenom, type],
        nom,
        prenom,
        type,
        // général,
        link,
        // partenaires,
        // rc,
        // Realisateur: [nom, prenom, type ],
        titre,
        cover,
    } = this.state

    return (
      <div className="screen">
      <MenuAdmin />
      <div className="Formcinema">
        <p>Date de debut :</p>
        <InputWithCalendar
          date={dateStart}
          onChangeDate={this.onChangeDateStart}
        />

        <div className="importance">
          <p>Importance </p>
          <CheckboxLine title="r&c" keyState="importance" value={0} funct={this.handleChangeInput}/>
          <CheckboxLine title="partenaires" keyState="importance" value={1} funct={this.handleChangeInput}/>
          <CheckboxLine title="général" keyState="importance" value={2} funct={this.handleChangeInput} />
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
            <CheckboxLine title="Acteur" keyState="type" value={0} funct={this.handleChangeInput}/>
            <CheckboxLine title="Distributeur" keyState="type" value={1} funct={this.handleChangeInput}/>
            <CheckboxLine title="Editeur" keyState="type" value={2} funct={this.handleChangeInput}/>
            <CheckboxLine title="Réalisateur" keyState="type" value={3} funct={this.handleChangeInput}/>
          </div>
        </div>

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
            <CheckboxLine title="Acteur" keyState="type" value={0} funct={this.handleChangeInput} />
            <CheckboxLine title="Distributeur" keyState="type" value={1} funct={this.handleChangeInput} />
            <CheckboxLine title="Editeur" keyState="type" value={2} funct={this.handleChangeInput} />
            <CheckboxLine title="Réalisateur" keyState="type" value={3} funct={this.handleChangeInput} />
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

export default FormCinema
