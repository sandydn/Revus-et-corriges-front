import React, { Component } from 'react'
import axios from 'axios'
import InputInLine from './InputInLine'
// import MenuAdmin from '../screen/MenuAdmin'

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
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.post(`http://localhost:4000/a7/video`, ({
      dateCreation: this.state.dateCreation,
      titre: this.state.titre,
    }),
      {headers: {'x-access-token': `${token}`}
      })
      .then((res) => {
        alert("Film ajouté !")
      })
      .catch((err) => {
      })
  }

render() {

  return (
    <div className="screen">
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

          <input onClick={this.handleSubmit}
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
