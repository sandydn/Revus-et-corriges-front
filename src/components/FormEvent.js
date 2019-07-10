import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';
import axios from 'axios';

import './Form.css';

class FormEvent extends Component {
  state = {
    //dateEnd: null,
    //dateStart: null,
    importance: null,
    description: null,
    link: null,
    titre: null,
    cover: null,
    lieux_idlieux: null,
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
      lieux_idlieux: this.state.lieux_idlieux,

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
      lieux_idlieux,
    } = this.state

    return (
      <div className="screen">
        <MenuAdmin />

        <div style={style.general}>
          <form className="Formevent" onSubmit={this.handleSubmit} >
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
            <InputInLine
              keyState="lieux_idlieux"
              title="Adresse"
              value={lieux_idlieux}
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
            >
              Envoyer le formulaire
            </button>

          </form>
        </div>
      </div>
    )
  }
}

export default FormEvent
