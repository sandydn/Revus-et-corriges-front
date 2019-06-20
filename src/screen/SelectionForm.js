import React, { Component } from 'react'
import LinkForm from '../components/LinkForm'
import '../screen/SelectionForm.css'

import { Link } from 'react-router-dom';
class SelectionForm extends Component {
  render() {
    return (
        <div className='container-button'>
          <h4 className="title-managment">Gérer les évènements</h4>
          <div className="event-managment">
          <Link to="/admin-events" className="event-button"><LinkForm name="Evènements" /></Link>
          <Link to="/admin-cinema" className="event-button"><LinkForm name="Cinéma" /></Link>
          <Link to="/admin-videos" className="event-button"><LinkForm name="Vidéos" /></Link>
          <LinkForm name="Rétrospective" />

          </div>
          <h4 className="title-managment"> Apparence du Calendrier</h4>
          <div className="deco-managment">
            <LinkForm name="Fond d'écran" />
            <LinkForm name="Couleur de la police" />
            <LinkForm name="Taille de la police" />
          </div>

          <Link to="/" ><input type="submit" value="Retourner à l'accueil" /></Link>
        </div>
    )
  }
}

export default SelectionForm