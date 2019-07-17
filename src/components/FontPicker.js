import React, { Component } from 'react'
import axios from 'axios'
import InputInLine from './InputInLine';

class FontPicker extends Component {
  state = {
    textfont: "",
  }

  handleChangeInput = (keyState, evt) => {
    console.log("keyState", keyState, "evt", evt.target.value)
    this.setState({ [keyState]: evt.target.value }, () => {
      console.log(this.state);

    })
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.put(`http://localhost:4000/a4/decoration/1`, ({
      textfont: this.state.textfont,
    }),
      {
        headers: {
          'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("Police ajoutée !")
      })
      .catch((err) => {
      })
  }
  render() {
    const  {
        textfont
    } = this.state
    
    return (
      <div>

        <InputInLine
          keyState={textfont}
          title="Police de texte"
          value={this.state.textfont}
          funct={this.handleChangeInput}
        />

        <input onClick={this.handleSubmit}
          className="button-submit"
          type="submit"
          value="Envoyer"
          color="grey"
          variant="contained"
        />
      </div>
    )
  }
}

export default FontPicker
