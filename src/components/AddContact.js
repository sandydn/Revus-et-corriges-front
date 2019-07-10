import React, { Component } from 'react'
import InputInLine from './InputInLine'
import MenuAdmin from '../screen/MenuAdmin'
import DropDownInline from './DropDownInLine';
import Button from '@material-ui/core/Button';

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

  render() {
    const {
      prenom,
      nom,
      type,
    } = this.state
    return (
      <div className="screen">
        <div>
          <MenuAdmin />
        </div>

        <div>
          <h2>Ajout d'un Contact</h2>
          <form>

            <InputInLine
              keyState="prenom"
              title="Prénom"
              value={prenom}
              funct={this.handleChangeInput}
            />

            <InputInLine
              keyState="nom"
              title="Nom"
              value={nom}
              funct={this.handleChangeInput}
            />

            <DropDownInline
              title='Type de contact'
              data={['Acteur', 'Distributeur', 'Editeur', 'Réalisateur']}
            // TODOS : add props for behavior
            />

            <Button
              className="button-submit"
              type="submit"
              value="Submit"
              color="grey"
              variant="contained"
            >Envoi
            </Button>

          </form>
        </div>

      </div>
    )
  }
}

export default AddContact
