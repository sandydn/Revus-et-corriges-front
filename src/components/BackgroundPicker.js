import React, { Component } from 'react'
import axios from 'axios'
import InputInLine from '../elements/InputInLine'

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
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration/1/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration/1'
    }
    axios.put(pathApi, ({
      background: this.state.background,
    }),
    {headers: {
      'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("Arrière-plan ajoutée !")
      })
      .catch((err) => {
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Changer le fond du calendrier</h3>
          <InputInLine
            keyState="background"
            title="Arrière-plan"
            value={this.state.background}
            func={this.handleChangeInput}
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












