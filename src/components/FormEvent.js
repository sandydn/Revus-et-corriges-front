import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment'


import CheckboxLine from './CheckboxLine';
import InputInLine from './InputInLine';
import InputWithCalendar from './InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin';


class FormEvent extends Component {

  state = { 
    
    adresse: [],
    category: null,
    dateEnd: null,
    dateStart: null,
    importance: [],
    description: null,
    link: null,
    titre: null,
    cover: null,
    //generateur d'input
    // video_idvideo: [],
    // contact_idcontact: []
  }


  handleChangeDropdown = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value }, () => {
      console.log(this.state);
    })
  }
  
  handleChangeInput = (keyState, evt) => {
    // console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value }, () => {
      console.log(this.state);

    })
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
      link: this.state.link,
      cover: this.state.cover,
      titre: this.state.titre,
      adresse: this.state.adresse,
      category: this.state.category,
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
      dateEnd,
      dateStart,
      description,
      link,
      titre,
      cover,
      adresse,
      category
    } = this.state

    return (
      
      <div className="screen">
        
        <MenuAdmin />

        <div style={style.general}>
          
          <form className="Formevent" onSubmit={this.handleSubmit} >
             
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
 
            {/* checkbox component must be replaced by a dropdowninline component */}
            
            <div className="importance">
              <p>Importance </p>
              <CheckboxLine title="r&c" keyState="importance" value={1} funct={this.handleChangeInput} />
              <CheckboxLine title="partenaires" keyState="importance" value={2} funct={this.handleChangeInput} />
              <CheckboxLine title="général" keyState="importance" value={3} funct={this.handleChangeInput} />
            </div>

            <InputInLine
              funct={this.handleChangeInput}
              keyState="titre"
              title="Titre"
              value={titre}
            />

            <InputInLine
              funct={this.handleChangeInput}
              keyState="adresse"
              title="Adresse"
              value={adresse}
            />

            <InputInLine
              funct={this.handleChangeInput}
              keyState="link"
              title="lien externe"
              value={link}
            />

            <InputInLine
              funct={this.handleChangeInput}
              keyState="description"
              title="information"
              value={description}
            />

            <InputInLine
              funct={this.handleChangeInput}
              keyState="cover"
              title="visuel"
              value={cover}
            />

            <InputInLine
              funct={this.handleChangeInput}
              keyState="category"
              title="type de film"
              value={category}
            />  

            <button
              className="button-submit"
              color="primary"
              type="submit"
              value="Submit"
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
