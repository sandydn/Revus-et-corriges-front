import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
import axios from "axios";
import SelectionForm from "../screen/SelectionForm"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import '../components/Form.css'


class Formevent extends Component {
  state = {
    dateStart: "",
    dateEnd: "",
    type:"",
    importance: false,
    name:"",
    adresse:"",
    dateinfo:"",
    link:"",
    description:"",
    src:"",
    succes: false
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
  axios.post(`http://localhost:4242/a13`,{
    email: event.target.email.value,
  password: event.target.password.value
})
  .then(() => {
    this.setState({ success: true })
  })
}


  render() {
    return ( 
      <>
      <SelectionForm />
      <div className="container">
            <div className="form-event">
          <form onSubmit={this.handleSubmit}>
            <h3>Formulaire event</h3>
              <fieldset >
              <legend>Importance de l'évènement :</legend>
              <div className="checkradio">
                <input 
                  className="buttonradio" 
                  name="importance" 
                  onChange={this.handleChange} 
                  type="radio" id="r-c" 
                  value={this.state.importance}
                />
                <label for="r-c">Revus et Corrigés</label>
                <input 
                  className="buttonradio" 
                  name="importance" 
                  onChange={this.handleChange} 
                  type="radio" id="partner" 
                  value={this.state.importance}
                />
                <label for="partner">Partenaires</label>
                <input 
                  className="buttonradio" 
                  name="importance" 
                  onChange={this.handleChange} 
                  type="radio" id="general" 
                  value={this.state.importance}
                />
                <label for="general">Général</label>
              </div>
            </fieldset>

            <p>Date de début :</p>
            <input className="input-form"
              name="dateStart"
              type="date"
              placeholder="JJ-MM-AAAA"
              value={this.state.dateStart}
              onChange={this.handleChange} />

            <p>Date de fin :</p>
            <input className="input-form"
              name="dateEnd"
              placeholder="JJ-MM-AAAA"
              type="date"
              value={this.state.dateEnd}
              onChange={this.handleChange} />

            <p>Titre de l'évènement :</p>
            <input className="input-form"
              type="text"
              name="name"
              placheholder="Ton titre"
              value={this.state.name}
              onChange={this.handleChange} />

            <p>Lieu :</p>
            <input className="input-form"
              type="text"
              name="adresse"
              placheholder="Adresse de l'évènement"
              value={this.state.adresse}
              onChange={this.handleChange} />

            <p>Date ( info-bulle ? ) :</p>
            <input className="input-form"
              type="date"
              name="dateinfo"
              placheholder="JJ-MM-AAAA "
              value={this.state.dateinfo}
              onChange={this.handleChange} />


            <p>Lien externe :</p>
            <input className="input-form"
              type="url"
              name="link"
              placeholder=""
              value={this.state.link}
              onChange={this.handleChange} />

            <p>Informations (info-bulle ?) :</p>
            <input className="input-form"
              type="text"
              name="description"
              placeholder="infos"
              value={this.state.description}
              onChange={this.handleChange} />
            <div className="button-choice">
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow-back" />
            <Link to="/admin" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
            <Link to="/" ><input type="submit" value="Valider" className="button-submit" /></Link>
            </div>
          </form>
          {this.state.success ? <p>Formulaire remplis avec succés</p> : null}
        </div>
        </div>
        </>
        )
    }
}

export default Formevent;
