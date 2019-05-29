import React, { Component } from 'react'
import ButtonForm from '../components/ButtonForm'
import '../screen/SelectionForm.css'

import { Link } from 'react-router-dom';

export class SelectionForm extends Component {
  render() {
    return (
      <>
        <div className='container-button'>
          <ButtonForm name="Revus et Corrigés" />
          <ButtonForm name="Evènements" />
          <ButtonForm name="Cinéma" />
          <ButtonForm name="Vidéos" />

          <Link to="/" ><input type="submit" value="Retourner à l'accueil" /></Link>
        </div>
      </>
    )
  }
}

export default SelectionForm