import React, { Component } from 'react'
import AddMovie from '../components/AddMovie'
import AddContact from '../components/AddContact';
import MenuAdmin from '../screen/MenuAdmin'
import '../components/css/Form.css'

class Ajout extends Component {

  render() {
    return (
      <div className="screen">
        <div>
          <MenuAdmin />
        </div>
        <div className="addmovie">
          <AddMovie />
        </div>
        <div className="addcontact">
          <AddContact />
        </div>
      </div>
    )
  }
}

export default Ajout
