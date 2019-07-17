import React, { Component } from 'react'

import "./Parameter.css"
import { SketchPicker } from 'react-color';
import axios from 'axios'


class Parameter extends Component {

  state = {
    show: false,
    color: "",
    background: "",
    textfont: ""
  }


  handleShow = () => {
    this.setState({ show: !this.state.show });
  }


  handleChange = (color) => {
    this.setState({ color: color.hex });
  }

  onChange = () => {
    this.setState({ color: '' });
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.post(`http://localhost:4000/a4/decoration`, ({
      textcolor: this.state.color,
      background: this.state.background,
      textfont: this.state.textfont
    }),
    {headers: {
      'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("Couleur de texte ajouté !")
      })
      .catch((err) => {
      })
  }

  render() {
    console.log(this.state.color);
    

    const effect = this.state.show ? "showing" : "notShowing"

    return (

      <>
        <h3>Changer la couleur de police du calendrier</h3>
        <form className="updatefontcolor" onSubmit={this.handleSubmit}>
          {/* <div> */}
            <img
              className="wheelButton"
              onClick={this.handleShow}
              src='https://pngimage.net/wp-content/uploads/2018/06/logo-engrenage-png-5.png'
            />
          {/* </div> */}
          <div
            style={{ backgroundColor: this.state.color }}
            onClick={this.onChange}
            className="view-color"
          >
            {/* <div> */}
              {/* <div> */}
                <SketchPicker
                  className={effect}
                  color={this.state.color}
                  onChangeComplete={this.handleChange}
                />
                <input
                  name="Valeur hexadécimale"
                  value={this.state.color}
                />
                <input onClick={this.handleSubmit}
                  className="button-submit"
                  type="submit"
                  value="Envoyer"
                  color="grey"
                  variant="contained"
                />
              </div>
            {/* </div>
          </div> */}
        </form>
      </>

    )
  }
}
export default Parameter












