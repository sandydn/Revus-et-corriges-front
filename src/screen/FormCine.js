import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import '../components/Form.css'
import SelectionForm from './SelectionForm';

class FormCine extends Component {
  state = {
    name: "",
    date: "",
    importance: false,
    realisateur: "",
    datecreation: "",
    link: "",
    distributeur: "",
    description: "",
    src: "",
    success: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
      event.preventDefault()
      axios.post(``,{
          email: event.target.email.value,
          password: event.target.password.valu
      })
      .then(() => {
          this.setState({ success: true })
      })
  }
  // ON SUBMIT - rediriger avec le routeur sur la page d'appel de formulaire

  render() {
    return (
<>
      <SelectionForm />
      <div className="container">
        <div className="formCine">
          <form classname="FormCine" onSubmit={this.handleSubmit} >
                <h3> Formulaire Cinéma </h3>
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

            <p>Titre</p>
          <input className="input-form"
              name="name"
              type="text"
              placeholder="titre"
              value={this.state.name}
              onChange={this.handleChange} />

            <p>Date de sortie :</p>
          <input className="input-form"
              name="date"
              placeholder="JJ-MM-AAAA"
              type="date"
              value={this.state.date}
              onChange={this.handleChange} />

            <p>Réalisateur :</p>
          <input className="input-form"
              type="text"
              name="realisateur"
              placheholder="Ton titre"
              value={this.state.realisateur}
              onChange={this.handleChange} />

            <p>Date de création :</p>
          <input className="input-form"
              type="date"
              name="datecreation"
              placheholder="MM/AAAA"
              value={this.state.datecreation}
              onChange={this.handleChange} />

            <p>Lien externe :</p>
          <input className="input-form"
              type="url"
              name="link"
              placeholder=""
              value={this.state.link}
              onChange={this.handleChange} />

            <p>Distributeur :</p>
          <input className="input-form"
              type="text"
              name="distributeur"
              placeholder="nom du distributeur"
              value={this.state.distributeur}
              onChange={this.handleChange} />

            <p>Description (info-bulle) :</p>
          <input className="input-form"
              type="text"
              name="description"
              placeholder="infos"
              value={this.state.description}
              onChange={this.handleChange} />

            <div className="button-choice">
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow-back" />
            <Link to="/select-form" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
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

export default FormCine