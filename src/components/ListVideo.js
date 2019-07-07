import React, { Component } from 'react'
import axios from 'axios'

class ListVideo extends Component {
    state = {
        list: []
    }


    GetVideo = async () => {
        const movie = await axios.get(`http://localhost:4242/a8/videos`)
        this.setState({list: movie.data}, () => {

        })
    }
    componentDidMount() {
        this.GetVideo()
    }

    render() {
        return (
            <div>

            <p>{this.state.list.movie}</p>
            </div>
        )
    }
}

export default ListVideo
