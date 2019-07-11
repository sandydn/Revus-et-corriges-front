import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import InputInLine from './InputInLine';
import CheckboxLine from './CheckboxLine';
import InputWithCalendar from './InputWithCalendar';
import DropDownInline from './DropDownInline';
import MenuAdmin from '../screen/MenuAdmin';
import axios from 'axios';
import './Form.css';


class FormCinema extends Component {
  state = {
    description: null,
    category: null,
    dateStart: null,
    importance: 0,
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
        <div className="Formcinema" style={styleBase.form} onSubmit={this.handleSubmit}>
          {/* <p>Date de debut :</p>
          <InputWithCalendar
            date={dateStart}
            onChangeDate={this.onChangeDateStart}
          /> */}


          {/* <DropDownInline
              title='Type de contact'
              data={['Acteur', 'Distributeur', 'Editeur', 'Réalisateur']}
            // TODOS : add props for behavior
            /> */}


          TODO dropdown titre de film

          <DropDownInline
              keyState='importance'
              title='Importance'
              data={['RC', 'Partenaires', 'Général']}
              func={this.handleChangeDropDown}
          />

          <DropDownInline
              keyState='category'
              title='catégorie'
              data={['Evenement', 'Cinema', 'Vidéo', 'Rétrospective']}
              func={this.handleChangeDropDown}
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

            <input  onClick={this.handleSubmit}
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

export default FormCinema
