import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/BackgroundPicker';
import "../screen/Settings.css"
class Settings extends Component {
  render() {
    return (
      <div>
        <div>
          <MenuAdmin />
        </div>

        <div  className=" test">
        <ColorPicker />
        <BackgroundPicker />
        </div>
      </div>

    )
  }
}

export default Settings
