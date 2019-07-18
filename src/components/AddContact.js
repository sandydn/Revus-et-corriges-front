import React, { Component } from 'react'
import InputInLine from '../elements/InputInLine'
import DropDownInline from '../elements/DropDownInline';
import ButtonCustom from '../elements/ButtonCustom'
import { PostDataContact } from '../utilis'

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
    prenom: '',
    nom: '',
    type: 0,
  }

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeDropDown = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    PostDataContact(this.state)
  }

  render() {
    const {
      prenom,
      nom,
    } = this.state
    const { close } = this.props

    return (
      <div style={styleBase.general}>
        <ButtonCustom
          title='X'
          type='button'
          onClick={close}
          style={styleBase.close}
        />
        <h2>Ajout d'un Contact :</h2>
        <form onSubmit={this.handleSubmit}>

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
            keyState='type'
            title='Type'
            data={['Acteur', 'Distributeur', 'Editeur', 'Réalisateur']}
            func={this.handleChangeDropDown}
          />

          <ButtonCustom
            title='Ajouter'
            type='submit'
            style={{ float: 'right' }}
          />
        </form>
      </div>
    )
  }
}

export default AddContact