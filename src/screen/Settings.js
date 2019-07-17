import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ColorPicker from '../components/ColorPicker';

class Settings extends Component {
  render() {
    return (
      <div>
        <div>
          <MenuAdmin />
        </div>
        <ColorPicker />
      </div>

    )
  }
}

export default Settings
