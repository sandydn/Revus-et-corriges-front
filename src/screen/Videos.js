import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import axios from 'axios'

import MenuAdmin from './MenuAdmin';
import ButtonForm from '../elements/ButtonForm'
// import ListVideo from '../components/ListVideo';
// import FormVideos from '../components/FormVideos';
import '../screen/Events.css'

class Videos extends Component {

    // state = {
    //     results: {},
    //     isLoading: false,
    //     errors: null
    //   };
    
    
    // getevent() {
    //     axios
    //       .get("http://localhost:4000/a5/event")
    //       .then(results => { 
    //         this.setState({results: results.data, isLoading: true}) 
    //         console.log('je suis la', this.state)
    //       })
    // }
    
    
    // componentDidMount() {
    //     this.getevent()
    // }

    render() {
        return (
        <div>
            <div className='screenVideo'>
                <MenuAdmin />
                <Link to="/admin-videos-form"><ButtonForm name="Ajouter une vidéo" /></Link>
            </div>
            
            {/* <div className="getdata">
            {this.state.isLoading && this.state.results.map(event => 
            <p>
              {(event.titre)}
              {(event.dateStart)}
              {(event.dateEnd)}
              {(event.description)}
            <img 
              src={(event.cover)} 
              href={(event.link)}>
            </img>
            </p>
            )}
          </div> */}

        </div>  
        )
    }
}

export default Videos
