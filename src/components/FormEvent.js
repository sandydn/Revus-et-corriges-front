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

  onChangeDateStart = (keyState, dateStart,evt ) => {
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
      console.log(e)
      axios.post(`http://localhost:4000/a5/event`, {
        // dateStart: e.target.dateStart.value,
        // dateEnd: e.target.dateEnd.value,
        importance: e.target.importance.value,
        description: e.target.description.value,
        link: e.target.link.value,
        cover: e.target.cover.value,
        titre: e.target.titre.value,
        lieux_idlieux: e.target.adresse.value,

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
      titre,
      cover,
    } = this.state

    return (
      <div className="screen">
      <MenuAdmin />
      <form className="Formevent" onSubmit={this.handleSubmit} >
        <p>Date de debut :</p>
        {/* <InputWithCalendar
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
          <CheckboxLine title="r&c" keyState="importance" value={"0"} funct={this.handleChangeInput}/>
          <CheckboxLine title="partenaires" keyState="importance" value={"1"} funct={this.handleChangeInput}/>
          <CheckboxLine title="général" keyState="importance" value={"2"} funct={this.handleChangeInput} />
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

    
          {/* <input
            className="button-submit"
            type="submit"
            value="Valider le formulaire"
            funct={this.handleSubmit}            
            /> */}
          {/* <button className="button-submit" type="submit" value="Submit">Valider le formulaire</button> */}
          <button
              type="submit"
              value="Submit"
              color="primary"
              variant="contained"
            >
            </button>
      </form>

      </div>
    )
  }
}

export default FormEvent
