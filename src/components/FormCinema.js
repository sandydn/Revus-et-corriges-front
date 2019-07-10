import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';
import axios from 'axios';
import './Form.css';

class FormCinema extends Component {
  state = {
    description: null,
    category: null,
    dateStart: null,
    importance: [],
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


  // ON SUBMIT - envoyer les informations de l'evenement dans la bdd
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/a5/event`, {
      // dateStart: e.target.dateStart.value,
      importance: this.state.importance,
      category: this.state.category,
      description: this.state.description,
      link: this.state.link,
      cover: this.state.cover,
      // titre: this.state.titre,


    })
  }

  render() {
    const {
      description,
      dateStart,
      link,
      cover,
      category,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />
        <form className="Formcinema" onSubmit={this.handleSubmit}>
          {/* <p>Date de debut :</p>
          <InputWithCalendar
            date={dateStart}
            onChangeDate={this.onChangeDateStart}
          /> */}

          TODO dropdown importance
          
          TODO dropdown titre de film
          
            <div className="importance">
            <p>Importance </p>
            <CheckboxLine title="r&c" keyState="importance" value={1} funct={this.handleChangeInput} />
            <CheckboxLine title="partenaires" keyState="importance" value={2} funct={this.handleChangeInput} />
            <CheckboxLine title="général" keyState="importance" value={3} funct={this.handleChangeInput} />
          </div>

          <InputInLine
            keyState="category"
            title="catégorie"
            value={category}
            funct={this.handleChangeInput}
          />

          <InputInLine
            keyState="description"
            title="information"
            value={description}
            funct={this.handleChangeInput}
          />

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

export default FormCinema
