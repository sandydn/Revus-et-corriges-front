import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/BackgroundPicker';
// import FontPicker from '../components/FontPicker';
import '../screen/Events.css'
import TextFont from '../components/TextFont';

const styleBase = {
  general: {
    background: 'white',
    left: '0',
    right: '-20%',
    top: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60vw',
    border: '10px solid black',
    borderRadius: '30px',
    position: 'absolute',
    padding: '60px',
  }
}

class Settings extends Component {
  render() {
    return (
      <div  style={styleBase.general} className='screenEvent'>
        
        <div >
          <BackgroundPicker />
        </div>
        <div>
          <ColorPicker />
        </div>
        <div>
          <TextFont />
        </div>
      
      </div>
    )
  }
}

export default Settings
