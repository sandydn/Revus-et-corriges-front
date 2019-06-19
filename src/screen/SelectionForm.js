import React, { Component } from 'react'
import ButtonForm from '../components/ButtonForm'
import '../screen/SelectionForm.css'

import { Link } from 'react-router-dom';
import FormVideo from './FormVideo';
import FormCine from './FormCine';
import Formevent from './Formevent';

class SelectionForm extends Component {
  render() {
    return (
<>
        <div className='container-button'>
          <Link to="/formevent" className="choice-button"><ButtonForm name="Evènements" /></Link>
          <Link to="/formcinema" className="choice-button"><ButtonForm name="Cinéma" /></Link>
          <Link to="/formvideo" className="choice-button"><ButtonForm name="Vidéos" /></Link>
          <Link to="/login" ><input type="submit" value="Retourner à l'accueil" /></Link>
        </div>
       
</>
    )
  }
}

export default SelectionForm