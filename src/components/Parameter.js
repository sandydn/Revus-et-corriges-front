import React, { Component } from 'react'

import "./Parameter.css"
import { SketchPicker } from 'react-color';
import "react-datepicker/dist/react-datepicker.css"
 class Parameter extends Component {

  state = {
    show:true,
    color:"",
  }
 

  handleShow = () => {
    this.setState({ show : !this.state.show });
  }


   handleChange = (color) => {
   this.setState({ color: color.hex});
  }

  onChange = () => {
    this.setState({ color: '' });
 }



  render() {

    const effect = this.state.show ? "showing" : "notShowing"
    console.log(this.state)
    
    return (
      
      <div  
        style={{ backgroundColor: this.state.color }} 
        onClick={this.onChange}
      >
        
        <h1>BOUTON PARAMETRE</h1>

        <div>
          <img 
            className = "wheelButton"
            onClick={this.handleShow} 
            src= 'https://pngimage.net/wp-content/uploads/2018/06/logo-engrenage-png-5.png' 
          /> 
        </div>

        <div>
          <SketchPicker 
            className = {effect}  
            color={ this.state.color }
            onChangeComplete={ this.handleChange }/>
        </div> 



      </div>
    )
  }
}
export default Parameter












