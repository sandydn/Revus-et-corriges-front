import React, { Component } from 'react'
// import {Link} from 'react-router-dom';

import MenuAdmin from './MenuAdmin';
import ButtonForm from '../components/ButtonForm'
// import ListVideo from '../components/ListVideo';
// import FormVideos from '../components/FormVideos';
import '../screen/Events.css'

class Videos extends Component {
    render() {
        return (
            <div className='screenVideo'>
                <MenuAdmin />
                <ButtonForm name="Ajouter une vidéo" />
            </div>
        )
    }
}

export default Videos
