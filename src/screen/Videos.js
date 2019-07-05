import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom';
import '../screen/Events.css'
import ListVideo from '../components/ListVideo';

class Videos extends Component {
    render() {
        return (
            <div className='screenVideo'>
                <MenuAdmin />
                <ListVideo />
                <Link to="/form-video"><ButtonForm name="Ajouter une vidéo" /></Link>
            </div>
        )
    }
}

export default Videos
