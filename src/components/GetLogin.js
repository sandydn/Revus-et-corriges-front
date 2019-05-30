import React, { Component } from 'react'
import axios from 'axios';

class GetLogin extends Component {
    state = {
        auth: null
    }

    componentDidMount() {
        axios.get(`http://localhost:4242/adminform`).then(result => {
            console.log(result.data)
            this.setState({ auth: result.data })
        })
    }

    render() {
        if (this.state.auth === null) {
            return <p> loading... </p>
        }
        const tabAuth = this.state.auth.map((value, key) => {
            return (
                <div className="" key={key}>
                    <div>{value.email}</div>
                    <div>{value.password}</div>
                </div>
            )
        })
        return <div> { tabAuth } </div>
    }
}

export default Getlogin
