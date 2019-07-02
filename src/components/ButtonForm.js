import React, { Component } from 'react'
import "../screen/SelectionForm.css"

export class ButtonForm extends Component {

  render() {

    return (
      <>
        <div>
          <button 
            className='buttonform'
            type="button">
            {this.props.name}
          </button>
        </div>
      </>
    )
  }
}

export default ButtonForm