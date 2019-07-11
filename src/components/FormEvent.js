import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment'


import CheckboxLine from './CheckboxLine';
import DropDownInline from './DropDownInline'
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar';
import TextareaCustom from  './TextAreaCustom';
import MenuAdmin from '../screen/MenuAdmin';

import './css/Form.css';

class FormEvent extends Component {

  state = {
    //generateur d'input
    adresse: [],
    category: null,
    dateEnd: null,
    dateStart: null,
    importance: [],
    description: null,
    link: null,
    titre: null,
    cover: null,
    // video_idvideo: [],
    // contact_idcontact: []
  }
  
  handleChangeInput = (keyState, evt) => {
    // console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value }, () => {
      console.log(this.state);

  })

  handleChangeDropDown = (keyState, value) => {
    console.log("keyState", keyState, "evt", value)
    this.setState({ [keyState]: value })
  }

  onChangeDateStart = dateStart => {
    if (dateStart > this.state.dateEnd && this.state.dateEnd) {
      return console.log('error')
    }
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
      //convert date format from DatePicker for filling database with the right format
      dateStart: moment(this.state.dateStart).format('YYYY-MM-DD'),
      dateEnd: moment(this.state.dateEnd).format('YYYY-MM-DD'),
      importance: this.state.importance,
      description: this.state.description,
      category: this.state.category,
      link: this.state.link,
      cover: this.state.cover,
      titre: this.state.titre,
      adresse: this.state.adresse,
      category: this.state.category,
    })
  }
}

  render() {

    const {
      dateEnd,
      dateStart,
      description,
      link,
      titre,
      cover,
      adresse,
      category
    } = this.state


    const styleBase = {
      form: {
        background: 'linear-gradient(to left, #fff, #A9DCFF)',
        width: '100%',
        borderLeft: '5px solid #A9DCFF',
        borderTop: '5px solid #A9DCFF',
        padding: '10px'
      }
    }
    return (
      
      <div className="screen">
        
        <MenuAdmin />

        <div className="Formevent" style={styleBase.form} onSubmit={this.handleSubmit} >
          <p>Date de debut :</p>
          <InputWithCalendar
            date={dateStart}
            funct={this.handleChangeInput}
            onChangeDate={this.onChangeDateStart}
            keyState="dateStart"
            value={dateStart}
          />

          <p>Date de fin :</p>
          <InputWithCalendar
            date={dateEnd}
            funct={this.handleChangeInput}
            onChangeDate={this.onChangeDateEnd}
            keyState="dateEnd"
            value={dateEnd}
          />


          <InputInLine
            keyState="titre"
            title="Titre"
            value={titre}
            funct={this.handleChangeInput}
          />

          <DropDownInline
            keyState='importance'
            title='Importance'
            data={['RC', 'Partenaires', 'Général']}
            func={this.handleChangeDropDown}
          />

          <InputInLine
            keyState="adresse"
            title="Adresse"
            value={adresse}
            funct={this.handleChangeInput}
          />

          <DropDownInline
            keyState="category"
            title="catégorie"
            data={['Evenement', 'Cinema', 'Video', 'Rétrospective']}
            func={this.handleChangeDropDown}
          />

          <InputInLine
            keyState="link"
            title="lien externe"
            value={link}
            funct={this.handleChangeInput}
          />

          <TextareaCustom
            keyState="description"
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
    )
  }
}

export default FormEvent
