import React, { Component } from 'react'

import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';
import axios from 'axios';

import './Form.css';

class FormEvent extends Component {

  state = {
    //generateur d'input
    adresse: [],
    category: null,
    dateEnd: null,
    dateStart: null,
    importance: 0,
    description: null,
    link: null,
    titre: null,
    cover: null,
    video_idvideo: [],
    contact_idcontact: []
  }


  handleChangeInput = (keyState, evt) => {
    // console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value }, () => {
      console.log(this.state);

    })
  }

  handleChangeDropdown = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value }, () => {
      console.log(this.state);

    })
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

  // ON SUBMIT - envoyer les informations de l'evenement dans la bdd
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/a5/event`, {
      //dateStart: this.state.dateStart,
      //dateEnd: this.state.dateEnd,
      importance: this.state.importance,
      description: this.state.description,
      link: this.state.link,
      cover: this.state.cover,
      titre: this.state.titre,
      adresse: this.state.adresse,

    })
  }


  render() {

    const style = {
      general: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20%'
      }
    }

    const {
      // dateEnd,
      // dateStart,
      description,
      link,
      titre,
      cover,
      adresse,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />

        <div style={style.general}>
          <div className="Formevent" onSubmit={this.handleSubmit} >
            {/* <p>Date de debut :</p>
            <InputWithCalendar
            date={dateStart}
            onChangeDate={this.onChangeDateStart}
            keyState="dateStart"
            value={dateStart}
            funct={this.handleChangeInput}
          /> 

            <p>Date de fin :</p>
          <InputWithCalendar
            date={dateEnd}
            onChangeDate={this.onChangeDateEnd}
            keyState="dateEnd"
            value={dateEnd}
            funct={this.handleChangeInput}
          />   */}


            <InputInLine
              keyState="titre"
              title="Titre"
              value={titre}
              funct={this.handleChangeInput}
            />

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


            <input onClick={this.handleSubmit}
              className="button-submit"
              type="submit"
              value="Envoyer"
              color="grey"
              variant="contained"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FormEvent
