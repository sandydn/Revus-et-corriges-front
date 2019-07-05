import React, { Component } from 'react'
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar'
import { Link } from 'react-router-dom';

import './Form.css';

class Formevent extends Component {
  state = {
    adresse: null,
    dateEnd: null,
    dateStart: null,
    général: null,
    information: null,
    lien: null,
    nomLieu: null,
    partenaires: null,
    rc: null,
    titre: null,
    visuel: null,
  }


  handleChangeInput = (keyState, evt) => {
    console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value })
  }

  // handleChangeCheckbox = (keyState, evt) => {
  //   this.setState({ [keyState]: evt.target.value})
  // }

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
      général,
      information,
      lien,
      nomLieu,
      partenaires,
      rc,
      titre,
      visuel,
    } = this.state

    return (
      <div className="Formevent">
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
          <CheckboxLine title="r&c" keyState="rc" value={rc} funct={this.handleChangeCheckbox}/>
          <CheckboxLine title="partenaires" keyState="partenaires" value={partenaires} funct={this.handleChangeCheckbox}/>
          <CheckboxLine title="général" keyState="général" value={général} funct={this.handleChangeCheckbox} />
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
          keyState="lien"
          title="lien externe"
          value={lien}
          funct={this.handleChangeInput}
        />

        <InputInLine
          keyState="information"
          title="information"
          value={information}
          funct={this.handleChangeInput}
        />

        <InputInLine
          keyState="visuel"
          title="visuel"
          value={visuel}
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
    )
  }
}

export default Formevent
