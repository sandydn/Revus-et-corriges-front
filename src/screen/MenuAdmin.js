import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

import LinkForm from '../components/LinkForm'
import '../screen/MenuAdmin.css'

class MenuAdmin extends Component {

  state = {
    results: {},
    isLoading: false,
    errors: null
  };


getevent() {
    axios
      .get("http://localhost:4000/a5/event")
      .then(results => { 
        this.setState({results: results.data, isLoading: true}) 
      })
}


componentDidMount() {
    this.getevent()
}

  render() {
    return (

      <div  className="all">

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

      <div>
        <div className="getdata">
          {this.state.isLoading && this.state.results.map(event => 
          <p>
            {(event.titre)}
            {(event.dateStart)}
            {(event.dateEnd)}
            {(event.description)}
          <img 
            src={(event.cover)} 
            href={(event.link)}>
          </img>
          </p>
          )}
        </div>
      </div>
      
      </div>
    )
  }
}

export default MenuAdmin