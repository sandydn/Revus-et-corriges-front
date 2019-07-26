import React, {Component} from 'react'
import {Route, Redirect, withRouter} from "react-router-dom"
import axios from 'axios'

class PrivateRoute extends Component {

    state = {
        verified: false,
        isLoading: true
    }

    componentDidMount() {
        this.verifyToken()
    }

    verifyToken() {
        // Getting localStorage data
        const token = localStorage.getItem("token")
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/auth/verify'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/auth/verify'
        }

        axios({
            method: "Get",
            url: pathApi,
            headers: {
                "x-access-token": `${token}`
            }
        })
            .then(res => {
                this.setState({
                    verified: true,
                    isLoading: false
                })
            }).catch(error => {
                this.setState({
                    verified: false,
                    isLoading: false
                })
            })
    }

    render() {
        // Verify if a good token //
        const { verified, isLoading } = this.state
        const { component: Component, ...rest } = this.props

        if (!isLoading) {
            return (
                <Route {...rest} render={props => (
                    verified ? (
                        <Component {...props} />
                    )
                        :
                        (
                            <Redirect to={{
                                pathname: '/login',
                            }}
                            />
                        )
                )}
                />
            )
        } else {
            return <Redirect to='/menu-admin' />
        }
    }
}

export default withRouter(PrivateRoute)