import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../components/Form.css"

class Form extends Component {
  state = {
    date: "",
    importance: false,
    name: "",
    director: "",
    datecreation: "",
    format: "",
    link: "",
    editor: "",
    selectedFile: null,
    success: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  fileUploadhandler = e => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('/video', fd)
  }

  render() {
    return (
      <div className="container">
        <Link to="/select-form" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>

        <h1> FORMULAIRE VIDEO</h1>
        <div>

          <form className="videoForm"
            onSubmit={this.handleSubmit}>

            <fieldset >
              <legend>Importance de l'évènement :</legend>
              <div className="checkradio">
                <input className="buttonradio" type="radio" id="r-c" name="importance" value={this.state.importance}
                  onChange={this.handleChange} />
                <label for="r-c">Revus et Corrigés</label>
                <input className="buttonradio" type="radio" id="partner" name="importance" value={this.state.importance}
                  onChange={this.handleChange} />
                <label for="partner">Partenaires</label>
                <input className="buttonradio" type="radio" id="general" name="importance" value={this.state.importance}
                  onChange={this.handleChange} />
                <label for="general">Général</label>
              </div>
            </fieldset>

            Date de sortie :
            <input className="input-form"
              type="text"
              name="date"
              placeholder="JJ/MM/AAAA"
              value={this.state.date}
              onChange={this.handleChange} />

            Titre :
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="movie's title"
              value={this.state.name}
              onChange={this.handleChange} />

            Réalisateur :
            <input
              className="input-form"
              type="text"
              name="director"
              placeholder="directed by..."
              value={this.state.director}
              onChange={this.handleChange} />

            Date de création :
            <input className="input-form"
              type="date"
              name="datecreation"
              placeholder="MM/AAAA"
              value={this.state.datecreation}
              onChange={this.handleChange} />

            Editeur :
            <input
              className="input-form"
              type="text"
              name="editor"
              placeholder="edited by..."
              value={this.state.editor}
              onChange={this.handleChange} />

            Format :
            <input
              className="input-form"
              type="text"
              name="format"
              placeholder="DVD/BLU-RAY..."
              value={this.state.format}
              onChange={this.handleChange} />

            Link :
            <input className="input-form"
              type="url"
              name="link"
              placeholde="lien"
              value={this.state.link}
              onChange={this.handleChange} />

            <input
              className='hiddenInput'
              onChange={this.fileSelectedHandler}
              ref={fileInput => this.fileInput = fileInput}
              type="file" />


            <button
              className='buttonPick'
              onClick={() => this.fileInput.click()}>
              Pick File
            </button>

            <button
              className="buttonUpload"
              onClick={this.fileUploadhandler}>
              Upload
            </button>

            <Link to="/select-form" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
          </form>
          {this.state.success ? <p>Formulaire remplis avec succés</p> : null}
        </div>

      </div>
    )
  }
}

export default Form

