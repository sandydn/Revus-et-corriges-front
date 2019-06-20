import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom';
import '../screen/Video.css'

class Videos extends Component {
    render() {
        return (
            <div className='screenVideo'>
                <SelectionForm />
                <Link to="/formvideo"><ButtonForm name="Ajouter une vidéo" /></Link>
            </div>
        )
    }
}

export default Videos
