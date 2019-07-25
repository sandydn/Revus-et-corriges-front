import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// brick
import LinkForForms from '../components/LinkForForms'
import Settings from './Settings'

class MenuAdmin extends Component {

  state={   
    displayModalSettings:false,
  }

  getevent() {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event'
    }
    axios
      .get(pathApi)
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
            <Link to="/admin-events" className="event-button"><LinkForForms name="Evènements" /></Link>
            <Link to="/admin-cinema" className="event-button"><LinkForForms name="Cinéma" /></Link>
            <Link to="/admin-videos" className="event-button"><LinkForForms name="Vidéos" /></Link>
            <Link to="/admin-movie-form" className="event-button"><LinkForForms name="Ajout de Film" /></Link>
          </div>
          <h4 className="title-managment"> Gestion administrateur</h4>
          <div className="deco-managment">
            <Link onClick={this.upModalSettings} className="event-button"><LinkForForms name="Paramètres" /></Link>
            <Link to="/signup" className="event-button"><LinkForForms name="Ajouter un administrateur" /></Link>
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
