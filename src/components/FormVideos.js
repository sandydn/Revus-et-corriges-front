import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import CheckboxContact from './CheckboxContact';
import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import InputContact from './InputContact';
import MenuAdmin from '../screen/MenuAdmin';

import './css/Cardcontact.css'
import './css/Form.css';

class FormVideos extends Component {
  state = {
    dateCreation: null,
    dateStart: null,
    nomreal: null,
    prenomreal: null,
    typereal: null,
    nomedit: null,
    prenomedit: null,
    typeedit: null,
    format: null,
    importance: null,
    link: null,
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



  // // ON SUBMIT - envoyer les informations de l'evenement dans la bdd
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e)
  //   axios.post(`http://localhost:4000/a5/event`, {
  //     // dateStart: e.target.dateStart.value,
  //     // dateEnd: e.target.dateEnd.value,
  //     importance: e.target.importance.value,
  //     description: e.target.description.value,
  //     link: e.target.link.value,
  //     cover: e.target.cover.value,
  //     titre: e.target.titre.value,
  //     lieux_idlieux: e.target.adresse.value,

  //   })
  // }

  render() {
    const {
      dateCreation,
      dateStart,
      nomreal,
      nomedit,
      prenomreal,
      prenomedit,
      format,
      link,
      titre,
      cover,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />
        <form className="Formvideos" onSubmit={this.handleSubmit}>
          <p>Date de debut :</p>
          <InputWithCalendar
            date={dateStart}
            onChangeDate={this.onChangeDateStart}
          />

          <div className="importance">
            <p>Importance </p>
            <CheckboxLine title="r&c" keyState="importance" value={1} funct={this.handleChangeInput} />
            <CheckboxLine title="partenaires" keyState="importance" value={2} funct={this.handleChangeInput} />
            <CheckboxLine title="général" keyState="importance" value={3} funct={this.handleChangeInput} />
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
            <p className="Role-contact"></p>
            <InputContact
              keyState="prenomreal"
              title="prénom"
              value={prenomreal}
              funct={this.handleChangeInput}
            />

              <InputContact
                keyState="nomreal"
                title="nom"
                value={nomreal}
                funct={this.handleChangeInput}
              />
              <div className="type-contact">
                <CheckboxContact title="Acteur" keyState="typereal" value={0} funct={this.handleChangeInput} />
                <CheckboxContact title="Distributeur" keyState="typereal" value={1} funct={this.handleChangeInput} />
                <CheckboxContact title="Editeur" keyState="typereal" value={2} funct={this.handleChangeInput} />
                <CheckboxContact title="Réalisateur" keyState="typereal" value={3} funct={this.handleChangeInput} />
              </div>

            </div>

            <div className="contact">
              <p className="Role-contact"></p>
              <InputContact
                keyState="prenomedit"
                title="prénom"
                value={prenomedit}
                funct={this.handleChangeInput}
              />
              <InputContact
                keyState="nomedit"
                title="nom"
                value={nomedit}
                funct={this.handleChangeInput}
              />
              <div className="type-contact">
                <CheckboxContact title="Acteur" keyState="typeedit" value={0} funct={this.handleChangeInput} />
                <CheckboxContact title="Distributeur" keyState="typeedit" value={1} funct={this.handleChangeInput} />
                <CheckboxContact title="Editeur" keyState="typeedit" value={2} funct={this.handleChangeInput} />
                <CheckboxContact title="Réalisateur" keyState="typeedit" value={3} funct={this.handleChangeInput} />
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

            <button
              className="button-submit"
              type="submit"
              value="Submit"
              color="primary"
              variant="contained"
            >Envoyer le formulaire
            </button>
          </form>
        </div>
    )
  }
}

export default FormVideos
