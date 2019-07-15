import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import InputInLine from './InputInLine'


class AddMovie extends Component {

    state = {
        dateCreation: null,
        titre: null,
    }

    handleChangeInput = (keyState, evt) => {
        console.log("keyState", keyState, "evt", evt.target.value)
        this.setState({ [keyState]: evt.target.value })
    }


    handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`http://localhost:4000/a8/video`, {
        dateCreation: this.state.dateCreation,
        titre: this.state.titre,
      })
      alert('Film ajouté !')
    }
  
  render() {

    return (
      <div className="screen">
        <div>
            <h2>Ajout d'un film</h2>
        <form onSubmit={this.handleSubmit}>

            <InputInLine 
                keyState="dateCreation"
                title="date de création du film"    
                value={this.state.dateCreation}
                funct={this.handleChangeInput}
            />

            <InputInLine
                keyState="titre"
                title="titre du film"
                value={this.state.titre}  
                funct={this.handleChangeInput}          
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

export default AddMovie
