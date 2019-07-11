import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import InputContact from './InputContact';
import MenuAdmin from '../screen/MenuAdmin';


import './css/Form.css';

class FormVideos extends Component {
  state = {
    dateCreation: null,
    dateStart: null,
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
      dateCreation,
      dateStart,
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
TODO dropdown titre de film


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
// TODO dropdown importance + dropdown contact 


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
