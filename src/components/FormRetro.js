import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';
import axios from 'axios'

import './Form.css';

class FormRetro extends Component {
  state = {
    dateStart: null,
    category: null,
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



  // ON SUBMIT - envoyer les informations de l'evenement dans la bdd
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    axios.post(`http://localhost:4000/a5/event`, {
      // dateStart: e.target.dateStart.value,
      importance: this.state.importance,
      category: this.state.category,
      link: this.state.link,
      cover: this.state.cover,
      titre: this.state.titre,
    })
  }

  render() {
    const {
      dateStart,
      link,
      cover,
      titre,
      category,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />
        <form className="Formretro" onSubmit={this.handleSubmit}>
          {/* <p>Date de debut :</p>
          <InputWithCalendar
            date={dateStart}
            onChangeDate={this.onChangeDateStart}
          /> */}

            <InputInLine
              keyState="titre"
              title="Titre"
              value={titre}
              funct={this.handleChangeInput}
            />

            <div className="importance">
              <p>Importance </p>
              <CheckboxLine title="r&c" keyState="importance" value={1} funct={this.handleChangeInput} />
              <CheckboxLine title="partenaires" keyState="importance" value={2} funct={this.handleChangeInput} />
              <CheckboxLine title="général" keyState="importance" value={3} funct={this.handleChangeInput} />
            </div>

// todo 4 - dropdown 2 contact - realisateur, distributeur  +  1 importance + 1 films

          <InputInLine
            keyState="link"
            title="lien externe"
            value={link}
            funct={this.handleChangeInput}
          />

          <InputInLine
            keyState="category"
            title="catégorie"
            value={category}
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
