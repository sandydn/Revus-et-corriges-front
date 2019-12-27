import React, {Component} from 'react'
import {SketchPicker} from 'react-color'
import axios from 'axios'

import "../components/css/ColorPicker.css"

class ColorPicker extends Component {
  state = {
    color: "",
  }

  handleChange = (color) => {
    const rgbaColor =`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    this.setState({ color: rgbaColor });
  }

  onChange = () => {
    this.setState({ color: '' });
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration/1/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration/1'
    }
    axios.put(pathApi, ({
      textcolor: this.state.color,
    }),
    {headers: {
      'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("Nouvelle couleur de calendrier ajoutée !")
      })
      .catch((err) => {
      })
  }

  render() {
    return (
      <>
        <h3>Changer la couleur du calendrier</h3>
        <form className="updatefontcolor" onSubmit={this.handleSubmit}>
          <input
            className='colorInput'
            name="Valeur hexadécimale"
            value={this.state.color}
            style={{ backgroundColor: this.state.color }}
          />
          <div className='displayColorPicker'>
          <SketchPicker
            color={this.state.color}
            onChangeComplete={this.handleChange}
          />
          <input onClick={this.handleSubmit}
            className="button-submit"
            color="grey"
            id='colorPickerButton'
            type="submit"
            value="Envoyer"
            variant="contained"
          />
          </div>          
        </form>
      </>

    )
  }
}

export default ColorPicker












