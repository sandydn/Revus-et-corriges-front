import React, { Component } from 'react'
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/BackgroundPicker';
// import FontPicker from '../components/FontPicker';
import '../screen/Events.css'
import TextFont from '../components/TextFont';

class Settings extends Component {
  render() {
    return (
      <div  className='screenSettings'>
        
        <div >
          <BackgroundPicker />
        </div>
        <div>
          <ColorPicker />
        </div>
        <div>
          <TextFont />
        </div>
        <div onClick={this.props.close} className='closeModalSettings'>X</div>
      
      </div>
    )
  }
}

export default Settings
