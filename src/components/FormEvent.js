import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';

import './Form.css';

class FormEvent extends Component {
  state = {
    adresse: null,
    dateEnd: null,
    dateStart: null,
    importance: null,
    // général: null,
    information: null,
    link: null,
    nomLieu: null,
    // partenaires: null,
    // rc: null,
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
      adresse,
      dateEnd,
      dateStart,
      // général,
      information,
      link,
      nomLieu,
      // partenaires,
      // rc,
      titre,
      cover,
    } = this.state

    return (
      <div className="screen">
      <MenuAdmin />
      <form className="Formevent">
        <p>Date de debut :</p>
        <InputWithCalendar
          date={dateStart}
          onChangeDate={this.onChangeDateStart}
        />

        <p>Date de fin :</p>
        <InputWithCalendar
          date={dateEnd}
          onChangeDate={this.onChangeDateEnd}
        />

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

        <InputInLine
          keyState="nomLieu"
          title="nom du Lieu"
          value={nomLieu}
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
          keyState="information"
          title="information"
          value={information}
          funct={this.handleChangeInput}
        />

        <InputInLine
          keyState="cover"
          title="visuel"
          value={cover}
          funct={this.handleChangeInput}
        />


          <input
            className="button-submit"
            type="submit"
            value="Valider le formulaire"
          />

      </form>
      </div>
    )
  }
}

export default FormEvent
