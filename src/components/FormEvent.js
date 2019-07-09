import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import './Form.css';

class FormEvent extends Component {
  state = {
    lieux_idlieux: null,
    dateEnd: null,
    dateStart: null,
    importance: null,
    description: null,
    link: null,
    // nomLieu: null,
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

  onChangeDateStart = (keyState, dateStart, evt) => {
    if (dateStart > this.state.dateEnd && this.state.dateEnd) {
      return console.log('error')
    }
    console.log('test');

    this.setState({ [keyState]: evt.target.value })
  }

  onChangeDateEnd = dateEnd => {
    if (dateEnd < this.state.dateStart) {
      return console.log('error')
    }
    console.log(dateEnd);

    this.setState({ dateEnd })
  }

  // componentDidMount() {
  //   console.log('didmount', this.state);

  // }

  // ON SUBMIT - envoyer les informations de l'evenement dans la bdd
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/a5/event`, {
      // dateStart: e.target.dateStart.value,
      // dateEnd: e.target.dateEnd.value,
      importance: this.state.importance,
      description: this.state.description,
      link: this.state.link,
      cover: this.state.cover,
      titre: this.state.titre,
      lieux_idlieux: this.state.adresse,
      
    })
  }


  render() {
    const {
      adresse,
      // dateEnd,
      // dateStart,
      description,
      link,
      // nomLieu,
      rc,
      partenaires,
      general,
      titre,
      cover,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />
        <form className="Formevent" onSubmit={this.handleSubmit} >
          {/* <p>Date de debut :</p>
          <InputWithCalendar
          date={dateStart}
          onChangeDate={this.onChangeDateStart}
          keyState="dateStart"
          value={dateStart}
        /> */}

          {/* <p>Date de fin :</p>
        <InputWithCalendar
          date={dateEnd}
          onChangeDate={this.onChangeDateEnd}
          keyState="dateEnd"
          value={dateEnd}
          funct={this.handleChangeInput}
        /> */}

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
          {/* 
        <InputInLine
          keyState="nomLieu"
          title="nom du Lieu"
          value={nomLieu}
          funct={this.handleChangeInput}
        /> */}

          <InputInLine
            keyState="adresse"
            title="Adresse"
            value={adresse}
            funct={this.handleChangeInput}
          />

          <InputInLine
            keyState="link"
            title="lien externe"
            value={link}
            funct={this.handleChangeInput}
          />

          <InputInLine
            keyState="description"
            title="information"
            value={description}
            funct={this.handleChangeInput}
          />

          <InputInLine
            keyState="cover"
            title="visuel"
            value={cover}
            funct={this.handleChangeInput}
          />

          <button
            className="button-submit"
            type="submit"
            value="Submit"
            color="primary"
            variant="contained"
          > Envoyer le formulaire
          </button>
        </form>

      </div>
    )
  }
}

export default FormEvent
