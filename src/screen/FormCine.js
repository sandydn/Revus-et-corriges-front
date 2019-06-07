import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import '../components/Form.css'

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

    fileSelectedHandler = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  fileUploadhandler = e => {
const fd = new FormData()
fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
axios.post('/video', fd)
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

      <div className="container">
        <Link to="/select-form" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
        <div className="formCine">
          <form classname="FormCine" onSubmit={this.handleSubmit} />
                <h3> Formulaire Cinéma </h3>
          <fieldset>
              <legend>Importance de l'évènement :</legend>
              <div>
              <input type="radio" id="r-c" name="importance" value={this.state.importance }
              onChange={this.handleChange}/>
              <label for="r-c">Revus et Corrigés</label>
              </div>
              <div>
              <input type="radio" id="partner" name="importance" value={this.state.importance }
              onChange={this.handleChange} />
              <label for="partner">Partenaires</label>
              </div>
              <div>
                <input type="radio" id="general" name="importance" value={this.state.importance }
              onChange={this.handleChange}/>
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

            <Link to="/" ><input type="submit" value="Valider le formulaire" className="button-submit" /></Link>
          </form>
          {this.state.success ? <p>Formulaire remplis avec succés</p> : null}
        </div>
      </div>
    )
  }
}

export default FormCine