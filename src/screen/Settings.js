import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ColorPicker from '../components/ColorPicker';
<<<<<<< HEAD
import BackgroundPicker from '../components/BackgroundPicker';
import "../screen/Settings.css"
=======
import FontPicker from '../components/FontPicker';
import '../screen/Events.css'

>>>>>>> 9cd5b8befdbb6e03fb5028e201625a1c754ccddd
class Settings extends Component {
  render() {
    return (
      <div  className='screenEvent'>
        <div>
          <MenuAdmin />
        </div>
<<<<<<< HEAD

        <div  className=" test">
        <ColorPicker />
        <BackgroundPicker />
=======
        <div>
          <ColorPicker />
        </div>
        <div>
          <FontPicker />
>>>>>>> 9cd5b8befdbb6e03fb5028e201625a1c754ccddd
        </div>
      </div>


    )
  }
}

export default Settings
