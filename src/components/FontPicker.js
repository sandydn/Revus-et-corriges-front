import React, { Component } from 'react'
import axios from 'axios'
import InputInLine from '..InputInLine/elements/InputInLine';

class FontPicker extends Component {
  state = {
    textfont: null,
  }

  handleChangeInput = (keyState, evt) => {
    console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value }, () => {
    })
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.put(`http://localhost:4000/a4/decoration/1`, ({
      textfont: this.state.textfont,
    }),
    {headers: {
    'x-access-token': `${token}`}
    }).then((res) => {
        alert("Police ajoutée !")
      }).catch((err) => {
      })
  }
  render() {
    const {
      textfont
    } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Changer la police du texte</h3>
          <InputInLine
            keyState="textfont"
            title="Police de texte"
            value={textfont}
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

export default FontPicker
