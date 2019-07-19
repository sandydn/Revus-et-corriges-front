import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/BackgroundPicker';
import FontPicker from '../components/FontPicker';
import '../screen/Events.css'

const styleBase = {
  general: {
    background:"white",
  }
}

class Settings extends Component {
  render() {
    return (
      <div style={styleBase.general} className='screenEvent'>
        
        <div>
          <BackgroundPicker />
        </div>
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
