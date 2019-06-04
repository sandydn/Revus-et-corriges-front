import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
import './Formevent.css'

class Formevent extends Component {
  state = {
    start: "",
    end: "",
    type:"",
    importance:"",
    titre:"",
    lieu:"",
    dateinfo:"",
    lien:"",
    information:"",
    visuel:"",
    succes: false
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

//   handleSubmit = event => {
//     event.preventDefault()
//   axios.post(`http://localhost:4242/adminform`,{
//     email: event.target.email.value,
//   password: event.target.password.value
// })
//   .then(() => {
//     this.setState({ success: true })
//   })
// }


  render() {
    return (
      <div className="container">
      <Link to="/select-form" ><input type="submit" value="Choisir un autre formulaire" className="button-selectform" /></Link>
            <div className="form-event">
          <form onSubmit={this.handleSubmit}>
            Date de début :
            <input className="input-event"
              name="start"
              type="date"
              placeholder="JJ-MM-AAAA"
              value={this.state.start}
              onChange={this.handleChange} />

            Date de fin :
            <input className="input-event"
              name="end"
              placeholder="JJ-MM-AAAA"
              type="date"
              value={this.state.end}
              onChange={this.handleChange} />

          <fieldset>
              <legend>Type de l'évènement :</legend>
              <div>
              <input 
              id="cinema" 
              name="type" 
              type="radio" 
              value={this.state.type}
              onChange={this.handleChange}/>
              <label for="cinema">Cinéma</label>
              </div>
              
              <div>
              <input 
              id="partner" 
              name="type" 
              type="radio" 
              value={this.state.type}
              onChange={this.handleChange} />
              <label for="partner">Vidéos</label>
              </div>
              <div>
                <input type="radio" id="general" name="type" value={this.state.type}
              onChange={this.handleChange}/>
                <label for="general">Evènements</label>
              </div>
              </fieldset>


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
            <input className="input-event"
              type="text"
              name="titre"
              placheholder="Ton titre"
              value={this.state.titre}
              onChange={this.handleChange} />

            Lieu :
            <input className="input-event"
              type="text"
              name="lieu"
              placheholder="Adresse de l'évènement"
              value={this.state.lieu}
              onChange={this.handleChange} />

            Date ( info-bulle ? ) :
            <input className="input-event"
              type="date"
              name="dateinfo"
              placheholder="JJ-MM-AAAA "
              value={this.state.dateinfo}
              onChange={this.handleChange} />


            Lien externe :
            <input className="input-event"
              type="url"
              name="lien"
              placeholder=""
              value={this.state.lien}
              onChange={this.handleChange} />

            Informations (info-bulle ?) :
            <input className="input-event"
              type="text"
              name="information"
              placeholder="infos"
              value={this.state.information}
              onChange={this.handleChange} />

            Visuel :
            <input className="input-event"
              type="url"
              name="visuel"
              placheholder=""
              value={this.state.visuel}
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
