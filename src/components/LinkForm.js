import React, { Component } from 'react'


export class LinkForm extends Component {

  render() {
    return (
      <>
        <div>
          <a className='menuadminbuttonform' href="link" type="button">
            {this.props.name}
          </a>
        </div>
      </>
    )
  }
}

export default LinkForm