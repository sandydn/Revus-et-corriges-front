import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';

import './css/Form.css';

class FormRetro extends Component {
  state = {
    dateStart: null,
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
    console.log('test', dateStart);

    this.setState({ dateStart: dateStart }, () => {
      console.log(this.state);

    })
  }

  onChangeDateEnd = dateEnd => {
    if (dateEnd < this.state.dateStart) {
      return console.log('error')
    }
    console.log(dateEnd);

    this.setState({ dateEnd: dateEnd }, () => {
      console.log(this.state);

    })
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
      dateStart,
      link,
      cover,
      titre,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />
        <form className="Formretro" onSubmit={this.handleSubmit}>
          <p>Date de debut :</p>
          <InputWithCalendar
            date={dateStart}
            onChangeDate={this.onChangeDateStart}
          />
          <InputInLine
            keyState="titre"
            title="Titre"
            value={titre}
            funct={this.handleChangeInput}
          />

// todo 4 - dropdown 2 contact  +  1 importance + 1 films
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

export default FormRetro
