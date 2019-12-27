import React, {Component} from 'react'
import axios from 'axios'

class GetLogin extends Component {
    state = {
        auth: null
    }

    componentDidMount() {
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/auth/login'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/auth/login'
        }
        axios.get(pathApi)
        .then(result => {
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

export default GetLogin