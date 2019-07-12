import React, { Component } from 'react'
import axios from 'axios'
import DeleteForm from './DeleteForm';

class Delete extends Component {

    state = {
        results: {},
        isLoading: false,
        errors: null
    };

    getevent() {
        axios
            .get("http://localhost:4000/a5/event")
            .then(results => {
                this.setState({ results: results.data, isLoading: true })
                console.log('je suis la', this.state)
            })
    }

    componentDidMount() {
        this.getevent()
    }

    render() {
        return (
            <div className="getdata">
                {this.state.isLoading && this.state.results.map(event =>
                    Object.keys(event).map( (key, index) => 
                        
                        
                            
                            <DeleteForm data={event[key]}/>
                        

                        
                    )
                )}
            </div>
        )
    }
}

export default Delete
