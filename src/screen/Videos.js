import React, { Component } from 'react'
import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm'
import {Link} from 'react-router-dom';
import '../screen/Events.css'
import ListVideo from '../components/ListVideo';
import FormVideos from '../components/FormVideos';

class Videos extends Component {
    render() {
        return (
            <div className='screenVideo'>
                <MenuAdmin />
                <Link to="/admin-videos-form"><ButtonForm name="Ajouter une vidéo" /></Link>
            </div>
        )
    }
}

export default Videos
