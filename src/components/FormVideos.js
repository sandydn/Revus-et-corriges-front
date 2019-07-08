import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import CheckboxContact from './CheckboxContact';
import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import InputContact from './InputContact';
import MenuAdmin from '../screen/MenuAdmin';

import './css/Cardcontact.css'
import './Form.css';

class FormVideos extends Component {
  state = {
    dateCreation: null,
    dateStart: null,
    nomreal: null,
    prenomreal:null,
    typereal:null,
    nomedit: null,
    prenomedit:null,
    typeedit:null,
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

  render() {
    const {
      dateCreation,
      dateStart,
      nomreal,
      prenomreal,
      typereal,
      nomedit,
      prenomedit,
      typeedit,
      format,
      link,
      titre,
      cover,
    } = this.state

    return (
      <div className="screen">
      <MenuAdmin />
      <div className="Formvideos">
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
            <CheckboxContact title="Acteur" keyState="typereal" value={0} funct={this.handleChangeInput}/>
            <CheckboxContact title="Distributeur" keyState="typereal" value={1} funct={this.handleChangeInput}/>
            <CheckboxContact title="Editeur" keyState="typereal" value={2} funct={this.handleChangeInput}/>
            <CheckboxContact title="Réalisateur" keyState="typereal" value={3} funct={this.handleChangeInput}/>
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
            <CheckboxContact title="Acteur" keyState="typeedit" value={0} funct={this.handleChangeInput}/>
            <CheckboxContact title="Distributeur" keyState="typeedit" value={1} funct={this.handleChangeInput}/>
            <CheckboxContact title="Editeur" keyState="typeedit" value={2} funct={this.handleChangeInput}/>
            <CheckboxContact title="Réalisateur" keyState="typeedit" value={3} funct={this.handleChangeInput}/>
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

export default FormVideos
