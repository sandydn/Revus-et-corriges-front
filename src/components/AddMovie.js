import React, { Component } from 'react'
import InputInLine from './InputInLine'
import MenuAdmin from '../screen/MenuAdmin'

class AddMovie extends Component {

    state = {
        dateCreation: '',
        titre: ''
    }

  render() {

    return (
      <div className="screen">
        <div>
          <MenuAdmin />
        </div>

        <div>
        <form>

            <InputInLine 
                keyState="dateCreation"
                title="date de création du films"    
                value={this.state.dateCreation}
            />

        </form>
        </div>

    </div>
    )
  }
}

export default AddMovie
