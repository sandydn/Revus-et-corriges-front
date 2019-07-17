import React, { Component } from 'react'


import axios from 'axios'
import InputInLine from './InputInLine';


class BackgroundPicker extends Component {

  state = {
    background: "",
  }

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value }, () => {

    })
  }
  
  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.post(`http://localhost:4000/a4/decoration`, ({
      background: this.state.background,
    }),
    {headers: {
      'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("background ajouté !")
      })
      .catch((err) => {
      })
  }

  render() {
    
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Changer le Background du calendrier</h3>
          <InputInLine
            keyState="background"
            title="Background"
            value={this.state.background}
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

    )
  }
}
export default BackgroundPicker












