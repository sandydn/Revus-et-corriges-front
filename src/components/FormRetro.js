import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import InputInLine from './InputInLine';
import DropDownInline from './DropDownInline';
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
    importance: 0,
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
    axios.post(`http://localhost:4000/a9/eventcontact`, {
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
        <div className="Formretro" style={styleBase.form} onSubmit={this.handleSubmit}>
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

          <DropDownInline
            keyState='importance'
            title='Importance'
            data={['RC', 'Partenaires', 'Général']}
            func={this.handleChangeDropDown}
          />

          <DropDownInline
            keyState='realisateur'
            title='Réalisateur'
            data={['Toto', 'Bebe', 'Kiki', 'Chocho', 'cécé']}
            func={this.handleChangeDropDown}
          />

          <DropDownInline
            keyState='distributeur'
            title='distributeur'
            data={['tomtom', 'sansan', 'papy', 'abdou']}
            func={this.handleChangeDropDown}
          />


          // todo  axios get  - dropdown 2 contact - realisateur, distributeur + 1 films

          <InputInLine
            keyState="link"
            title="lien externe"
            value={link}
            funct={this.handleChangeInput}
          />

          <DropDownInline
            keyState="category"
            title="catégorie"
            data={['Evenement', 'Cinema', 'Video', 'Rétrospective']}
            func={this.handleChangeDropDown}
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

export default FormRetro
