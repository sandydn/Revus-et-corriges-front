import React, {Component} from 'react'
import BackgroundPicker from '../components/BackgroundPicker'
import ColorPicker from '../components/ColorPicker'
import TextFont from '../components/TextFont'
import '../screen/Events.css'

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
