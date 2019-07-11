import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import InputContact from './InputContact';
import MenuAdmin from '../screen/MenuAdmin';

import './css/Cardcontact.css'
import './Form.css';

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

  handleChangeDropDown = (keyState, value) => {
    console.log("keyState", keyState, "evt", value)
    this.setState({ [keyState]: value })
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

      // //convert date format from DatePicker for filling database with the right format
      // dateStart: moment(this.state.dateStart).format('YYYY-MM-DD'),
      // dateEnd: moment(this.state.dateEnd).format('YYYY-MM-DD'),
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
        <div className="Formvideos" onSubmit={this.handleSubmit}>
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

          <input onClick={this.handleSubmit}
            className="button-submit"
            type="submit"
            value="Envoyer"
            color="grey"
            variant="contained"
          />

        </div>
      </div>
    )
  }
}

export default FormVideos
