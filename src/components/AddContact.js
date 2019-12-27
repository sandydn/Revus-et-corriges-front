import React, { Component } from 'react'

import {PostDataContact} from '../utilis'
import ButtonCustom from '../elements/ButtonCustom'
import DropDownInline from '../elements/DropDownInline'
import InputInLine from '../elements/InputInLine'

const styleBase = {
  general: {
    background: 'white',
    left: '0',
    right: '0',
    top: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40vw',
    border: '1px solid black',
    position: 'absolute',
    zIndex: '999',
    padding: '30px'
  },
  close: {
    width: '40px',
    height: '40px',
    float: 'right',
    background: 'black',
    color: 'white',
    borderRadius: '100px'
  }
}

class AddContact extends Component {
  state = {
    nom: '',
    prenom: '',
    genre: null,
  }
   lafunc = this.props.con


  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeDropDown = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    await PostDataContact(this.state)    
    this.props.close()
  }

  render() {
    const {
      nom,
      prenom
    } = this.state
    const close = this.props.close
    return (      
      <div style={styleBase.general}>
        <ButtonCustom
          title='X'
          type='button'
          onClick={close}
          style={styleBase.close}
        />
        <h2>Ajout d'un Contact :</h2>
        <form>

          <InputInLine
            keyState="prenom"
            title="Prénom"
            value={prenom}
            func={this.handleChangeInput}
          />

          <InputInLine
            keyState="nom"
            title="Nom"
            value={nom}
            func={this.handleChangeInput}
          />

          <DropDownInline
            keyState='genre'
            title='Type'
            data={['Acteur', 'Distributeur', 'Editeur', 'Réalisateur']}
            func={this.handleChangeDropDown}
          />

          <ButtonCustom
            title='Ajouter'
            type='submit'
            style={{ float: 'right' }}
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default AddContact