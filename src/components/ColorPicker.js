import React, { Component } from 'react'

import "./ColorPicker.css"
import { SketchPicker } from 'react-color';
import axios from 'axios'


class ColorPicker extends Component {

  state = {
    //show: false,
    color: "",
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
    axios.put(`http://localhost:4000/a4/decoration/1`, ({
      textcolor: this.state.color,
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
    

    //const effect = this.state.show ? "showing" : "notShowing"

    return (

      <>
        
        <h3>Changer la couleur du calendrier</h3>
        <form className="updatefontcolor" onSubmit={this.handleSubmit}>

          {/* <img
            className="wheelButton"
            onClick={this.handleShow}
            src='https://pngimage.net/wp-content/uploads/2018/06/logo-engrenage-png-5.png'
          /> */}

          <input
            className='colorInput'
            name="Valeur hexadécimale"
            value={this.state.color}
            style={{ backgroundColor: this.state.color }}
          />
          <div className='displayColorPicker'>
          <SketchPicker
            //className={effect}
            color={this.state.color}
            onChangeComplete={this.handleChange}
            
          />
          {/* <div
            style={{ backgroundColor: this.state.color }}
            onClick={this.onChange}
            className="view-color"
          >
            </div> */}
                      
        <input onClick={this.handleSubmit}
          className="button-submit"
          id='colorPickerButton'
          type="submit"
          value="Envoyer"
          color="grey"
          variant="contained"
        />
        </div>
                    
        </form>
      </>

    )
  }
}
export default ColorPicker












