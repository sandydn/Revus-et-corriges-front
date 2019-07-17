import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/BackgroundPicker';
import FontPicker from '../components/FontPicker';
import '../screen/Events.css'

class Settings extends Component {
  render() {
    return (
      <div  className='screenEvent'>
        <div>
          <MenuAdmin />
        </div>
        <BackgroundPicker />
        <div>
          <ColorPicker />
        </div>
        <div>
          <FontPicker />
        </div>
      </div>


    )
  }
}

export default Settings
