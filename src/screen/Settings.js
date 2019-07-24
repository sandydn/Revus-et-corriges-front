import React, {Component} from 'react'
import BackgroundPicker from '../components/BackgroundPicker'
import ColorPicker from '../components/ColorPicker'
import TextFont from '../components/TextFont'
import '../screen/Events.css'

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
      <div  style={styleBase.general} className='screenSettings'>
        
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
