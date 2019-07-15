import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'

import ButtonForm from '../components/ButtonForm'
import MenuAdmin from './MenuAdmin';
import '../screen/Events.css'

// import ListEvent from '../components/ListEvent';
// import Form from '../components/Form';

class Events extends Component {

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
            <div className='screenEvent'>
                <MenuAdmin />
                <Link to="/admin-events-form"><ButtonForm name="Ajouter un évenement" /></Link>
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

export default Events
