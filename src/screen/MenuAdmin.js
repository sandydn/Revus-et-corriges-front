import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import axios from 'axios'

import LinkForm from '../components/LinkForm'


class MenuAdmin extends Component {

//   state = {
//     results: {},
//     isLoading: false,
//     errors: null
//   };


getevent() {
    axios
      .get("http://localhost:4000/a5/event")
      .then(results => { 
        this.setState({results: results.data, isLoading: true}) 
      })
}

logout() {
  localStorage.clear()
  window.location.href = "/login"
}

// componentDidMount() {
//     this.getevent()
// }

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
        <Link to="/admin-ajout" className="event-button"><LinkForm name="Ajout"/></Link>
        </div>
        <h4 className="title-managment"> Gestion administrateur</h4>
        <div className="deco-managment">
        <Link to="/parametre" className="event-button"><LinkForm name="Paramètres"/></Link>
        <Link to="/signup" className="event-button"><LinkForm name="Ajouter un administrateur" /></Link>
        </div>
        <button onClick={this.logout}>LOGOUT</button>
        <Link to="/" ><input type="submit" value="Retourner à l'accueil" /></Link>
      </div>

      <div>
        {/* <div className="getdata">
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
        </div> */}
      </div>
      
      </div>
    )
  }
}

export default MenuAdmin