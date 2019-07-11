import React, { Component } from 'react'
import "../screen/MenuAdmin.css"

export class ButtonForm extends Component {

  render() {

    return (
      <>
        <div>
          <button 
            className='buttonform'
            type="button">
            {this.props.name}
            {this.props.funct}
          </button>
        </div>
      </>
    )
  }
}

export default ButtonForm