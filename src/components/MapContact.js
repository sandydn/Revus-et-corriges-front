import React, { Component } from 'react'
import axios from "axios"
import DropDownInlineSpec from './DropDownInlineSpec'

class MapContact extends Component {
    state = {
        results: [],
        isLoading: false,
        error: null,
    }

    getcontact = (async) => {
        axios.get("http://localhost:4000/a2/contact")
            .then(results => {
                this.setState({ results: results.data, isLoading: true })
                console.log('je suis la', this.state)
            })
    }

    componentDidMount() {
        this.getcontact()
    }


    render() {
        return (
            <div>

                <div className="getcontact">
                    {this.state.isLoading && this.state.results.map(contact =>
                        Object.keys(contact).map((key, index) =>
                            <DropDownInlineSpec 
                                title="liste de contact"
                                data={contact[index]}
                            />)
                    )}
                </div>
            </div>
        )
    }
}

export default MapContact
