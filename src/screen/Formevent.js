import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
import axios from "axios";
import './Formevent.css'

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
  axios.post(`http://localhost:4242/adminform`,{
    email: event.target.email.value,
  password: event.target.password.value
})
  .then(() => {
    this.setState({ success: true })
  })
}


  render() {
    return (
      <div className="container">
      <Link to="/select-form" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
            <div className="form-event">
          <form onSubmit={this.handleSubmit}>
          
            Date de début :
            <input className="input-form"
              name="dateStart"
              type="date"
              placeholder="JJ-MM-AAAA"
              value={this.state.dateStart}
              onChange={this.handleChange} />

            Date de fin :
            <input className="input-form"
              name="dateEnd"
              placeholder="JJ-MM-AAAA"
              type="date"
              value={this.state.dateEnd}
              onChange={this.handleChange} />


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

            Titre de l'évènement :
            <input className="input-form"
              type="text"
              name="name"
              placheholder="Ton titre"
              value={this.state.name}
              onChange={this.handleChange} />

            Lieu :
            <input className="input-form"
              type="text"
              name="adresse"
              placheholder="Adresse de l'évènement"
              value={this.state.adresse}
              onChange={this.handleChange} />

            Date ( info-bulle ? ) :
            <input className="input-form"
              type="date"
              name="dateinfo"
              placheholder="JJ-MM-AAAA "
              value={this.state.dateinfo}
              onChange={this.handleChange} />


            Lien externe :
            <input className="input-form"
              type="url"
              name="link"
              placeholder=""
              value={this.state.link}
              onChange={this.handleChange} />

            Informations (info-bulle ?) :
            <input className="input-form"
              type="text"
              name="description"
              placeholder="infos"
              value={this.state.description}
              onChange={this.handleChange} />

            Visuel :
            <input className="input-form"
              type="url"
              name="src"
              placheholder=""
              value={this.state.src}
              onChange={this.handleChange} />

            <Link to="/" ><input type="submit" value="Valider le formulaire" className="button-submit" /></Link>
          </form>
          {this.state.success ? <p>Vous êtes connecté.</p> : null}
        </div>
        </div>
        )
    }
}

export default Formevent;
