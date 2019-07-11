import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import InputInLine from './InputInLine'
import MenuAdmin from '../screen/MenuAdmin'

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
                title="Date de création du film"    
                value={this.state.dateCreation}
                funct={this.handleChangeInput}
            />

            <InputInLine
                keyState="titre"
                title="Titre du film"
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
