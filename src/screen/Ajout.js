import React, { Component } from 'react'
import AddMovie from '../components/AddMovie'
import AddContact from '../components/AddContact';
import MenuAdmin from '../screen/MenuAdmin'
import '../components/css/Form.css'
import Parameter from '../components/Parameter';

class Ajout extends Component {

  render() {
    return (
      <div className="screen">
          <div>
          <MenuAdmin />
          </div>
          <div>
        <AddMovie />
        <AddContact />
        <Parameter />
        </div>
      </div>
    )
  }
}

export default Ajout
