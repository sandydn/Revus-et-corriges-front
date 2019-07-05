import React, { Component } from 'react'
import "../screen/MenuAdmin.css"

export class LinkForm extends Component {

  render() {
    return (
      <>
        <div>
          <a className='buttonform' href="link"
            type="button">
            {this.props.name}
          </a>
        </div>
      </>
    )
  }
}

export default LinkForm