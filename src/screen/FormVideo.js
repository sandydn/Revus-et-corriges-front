
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import "../components/Form.css"

class FormVideo extends Component {
  state = {
    date: "",
    datecreation: "",
    director: "",
    editor: "",
    format: "",
    importance: false,
    link: "",
    name: "",
    src: "",
    success: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios.post(`http://localhost:4242/a24`,{
      date: event.target.date.value,
      format: event.target.format.value,
      name: event.target.name.value,
      src: event.target.src.value,
      link: event.target.link.value,
      datecreation: event.target.datecrea.value,
    })
    axios.post(`http://localhost:4242/a23`, {
      director: event.target.name.value,
    })
    axios.post(`http://localhost:4242/a12`, {
      editor: event.target.name.value
    })
  .then(() => {
    this.setState({ success: true })
  })

}

  render() {
    return (
      <div className="container">
        <div>

          <form 
            className="videoForm"
            onSubmit={this.handleSubmit}>
            <h3> FORMULAIRE VIDEO</h3>
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
            <p>Date de sortie :</p>
            <input className="input-form"
              name="date"
              onChange={this.handleChange} 
              placeholder="JJ/MM/AAAA"
              type="text"
              value={this.state.date}
            />
            <p>Titre :</p>
            <input
              className="input-form"
              name="name"
              onChange={this.handleChange} 
              placeholder="movie's title"
              type="text"
              value={this.state.name}
            />
            <p>Réalisateur :</p>
            <input
              className="input-form"
              name="director"
              onChange={this.handleChange} 
              placeholder="directed by..."
              type="text"
              value={this.state.director}
            />
            <p>Date de création :</p>
            <input 
              className="input-form"
              name="datecreation"
              onChange={this.handleChange} 
              placeholder="MM/AAAA"
              type="date"
              value={this.state.datecreation}
            />
            <p>Editeur :</p>
            <input
              className="input-form"
              name="editor"
              onChange={this.handleChange} 
              placeholder="edited by..."
              type="text"
              value={this.state.editor}
            />
            <p>Format :</p>
            <input
              className="input-form"
              name="format"
              onChange={this.handleChange} 
              placeholder="DVD/BLU-RAY..."
              type="text"
              value={this.state.format}
            />
            <p>Link :</p>
            <input 
              className="input-form"
              name="link"
              onChange={this.handleChange} 
              placeholder="lien"
              type="url"
              value={this.state.link}
            />
            <p>Image :</p>
            <input 
              className="input-form"
              name="src"
              onChange={this.handleChange} 
              placeholder="lien"
              type="url"
              value={this.state.src}
            />
            
            <div className="button-choice">
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow-back" />
            <Link to="/select-form"><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
            <Link to="/" ><input type="submit" value="Valider" className="button-submit" /></Link>
            </div>
          </form>
          {this.state.success ? <p>Formulaire remplis avec succés</p> : null}
        </div>
      </div>
    )
  }
}
export default FormVideo