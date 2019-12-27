import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import MenuAdmin from './MenuAdmin'
import ButtonForm from '../elements/ButtonForm'

import '../screen/Events.css'

class Videos extends Component {

    render() {
        return (
        <div>
            <div className='screenVideo'>
                <MenuAdmin />
                <Link to="/admin-videos-form"><ButtonForm name="Ajouter une vidéo" /></Link>
            </div>
        </div>  
        )
    }
}

export default Videos
