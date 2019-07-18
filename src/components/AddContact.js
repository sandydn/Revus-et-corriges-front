import React, { Component } from 'react'
import InputInLine from '../elements/InputInLine'
import MenuAdmin from '../screen/MenuAdmin'
import DropDownInline from '../elements/DropDownInline';
// import Button from '@material-ui/core/Button';
import axios from 'axios';

import './css/Form.css'

class AddContact extends Component {
  state = {
    prenom: null,
    nom: null,
    type: null,
  }

  handleChangeInput = (keyState, evt) => {
    console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeDropDown = (keyState, value) => {
    console.log("keyState", keyState, "evt", value)
    this.setState({ [keyState]: value })
  }

    handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.post(`http://localhost:4000/a2/contact`, ({
      prenom: this.state.prenom,
      nom: this.state.nom,
      genre: this.state.type,
    }),
      {headers: {
      'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("Contact ajouté !")
      })
      .catch((err) => {
      })
  }

  render() {
    const {
      prenom,
      nom,
    } = this.state

    return (
      <div className="screen">
        <div>
          <h2>Ajout d'un Contact</h2>
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

            <input  onClick={this.handleSubmit}
              className="button-submit"
              type="submit"
              value="Envoyer"
              color="grey"
              variant="contained"
            />
            
            
          </form>
        </div>

      </div>
    )
  }
}

export default AddContact
