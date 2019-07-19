import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import axios from 'axios'
// brick
import LinkForm from '../components/LinkForm'
import Settings from './Settings';
  

class MenuAdmin extends Component {

  state={   
    displayModalSettings:false,
  }

  getevent() {
    axios
      .get("http://localhost:4000/a5/event")
      .then(results => {
        this.setState({ results: results.data, isLoading: true })
      })
  }

  logout() {
    localStorage.clear()
    window.location.href = "/login"
  }

  upModalSettings = () => {
    const { displayModalSettings } = this.state
    // inverse la valeur de {displayModalContact} (true/false)
    this.setState({ displayModalSettings: !displayModalSettings})
  }

  renderModalSettings = () => {
    const { displayModalSettings } = this.state
    if (displayModalSettings)
      return <Settings close={this.upModalSettings}/>
  }
  
  render() {  
    
    return (
      <div style={this.props.style} className="all">
        
        <div className='container-button'>
          <h4 className="title-managment">Gérer les évènements</h4>
          <div className="event-managment">
            <Link to="/admin-events" className="event-button"><LinkForm name="Evènements" /></Link>
            <Link to="/admin-cinema" className="event-button"><LinkForm name="Cinéma" /></Link>
            <Link to="/admin-videos" className="event-button"><LinkForm name="Vidéos" /></Link>
            <Link to="/admin-ajout" className="event-button"><LinkForm name="Ajout" /></Link>
          </div>
          <h4 className="title-managment"> Gestion administrateur</h4>
          <div className="deco-managment">
            <Link onClick={this.upModalSettings} className="event-button"><LinkForm name="Paramètres" /></Link>
            <Link to="/signup" className="event-button"><LinkForm name="Ajouter un administrateur" /></Link>
          </div>
          <Link to="/" ><input type="submit" value="Retourner à l'accueil" /></Link>
          <button onClick={this.logout}>Se déconnecter</button>
        </div>
        {this.props.children}
        {this.renderModalSettings()}
      </div>
    )
  }
}

export default MenuAdmin
