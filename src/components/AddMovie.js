import React, { Component } from 'react'
import InputInLine from './InputInLine'
import MenuAdmin from '../screen/MenuAdmin'
import Button from '@material-ui/core/Button';
import axios from 'axios'

import axios from 'axios'

class AddMovie extends Component {

    state = {
        dateCreation: null,
        titre: null,
    }

    handleChangeInput = (keyState, evt) => {
        console.log("keyState", keyState, "evt", evt.target.value)
        this.setState({ [keyState]: evt.target.value })
    }

      // ON SUBMIT - envoie du film dans la bdd
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/a8/video`, {
      dateCreation: this.state.dateCreation,
      titre: this.state.titre,
    })
    alert("Film envoyé !")
  }


  render() {

    return (
      <div className="screen">
        <div>
          <MenuAdmin />
        </div>

        <div>
            <h2>Ajout d'un film</h2>
        <form onSubmit={this.handleSubmit}>

            <InputInLine 
                keyState="dateCreation"
                title="date de création du films"    
                value={this.state.dateCreation}
                funct={this.handleChangeInput}
            />

            <InputInLine
                keyState="titre"
                title="titre du films"
                value={this.state.titre}  
                funct={this.handleChangeInput}          
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

export default AddMovie
