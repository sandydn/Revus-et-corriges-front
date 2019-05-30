import React, { Component } from 'react'
import ButtonForm from '../components/ButtonForm'
import '../screen/SelectionForm.css'

import { Link } from 'react-router-dom';

class SelectionForm extends Component {
  render() {
    return (
      <>
        <div className='container-button'>
          <ButtonForm name="Revus et Corrigés" />
          <ButtonForm name="Evènements" />
          <Link to="/formcinema"><ButtonForm name="Cinéma" /></Link>
          <Link to="/formvideo"><ButtonForm name="Vidéos" /></Link>
          
          <Link to="/login" ><input type="submit" value="Retourner à l'accueil" /></Link>
        </div>
      </>
    )
  }
}

export default SelectionForm