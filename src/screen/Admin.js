import React, { Component } from 'react'
import axios from 'axios'
import MenuAdmin from './MenuAdmin';

class Admin extends Component {

    state = {
        results: [],
        isLoading: true,
        errors: null
      };


    getevent() {
        axios
          .get("http://localhost:4000/a5/event")
          .then(results => { 
              console.log('je suis la');
              return results.json()
          .catch(error => this.setState({ error, isLoading: false }));
          })
    }


    componentDidMount() {
        this.getevent()
    }
    

    render() {
        return (
            <div>
                <MenuAdmin />
            </div>
        )
    }
}

export default Admin
