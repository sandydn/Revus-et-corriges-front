import React, { Component } from 'react'
import LinkForm from '../components/LinkForm'
import '../screen/MenuAdmin.css'

import { Link } from 'react-router-dom';
class MenuAdmin extends Component {
  render() {
    return (
        <div className='container-button'>
          <h4 className="title-managment">Gérer les évènements</h4>
          <div className="event-managment">
          <Link to="/admin-events" className="event-button"><LinkForm name="Evènements" /></Link>
          <Link to="/admin-cinema" className="event-button"><LinkForm name="Cinéma" /></Link>
          <Link to="/admin-videos" className="event-button"><LinkForm name="Vidéos" /></Link>
          <Link to="/admin-retro" className="event-button"><LinkForm name="Rétrospective" /></Link>

          </div>
          <h4 className="title-managment"> Gestion administrateur</h4>
          <div className="deco-managment">
            <LinkForm name="Paramètres" />
            <Link to="/signup"><LinkForm name="Ajouter un administrateur" /></Link>

          </div>

          <Link to="/" ><input type="submit" value="Retourner à l'accueil" /></Link>
        </div>
    )
  }
}

export default MenuAdmin