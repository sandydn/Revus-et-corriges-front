import React, { Component } from 'react';
import axios from 'axios'
import { Route, Redirect, withRouter } from "react-router-dom";

class PrivateRoute extends Component {

    state = {
        verified: false,
        isLoading: true
    }

    componentDidMount() {
        this.verifyToken();
    }

    componentDidUpdate(prevProps) {
        if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0)
        }
    }

    verifyToken() {
        // Getting localStorage data
        const token = localStorage.getItem("token");

        axios({
            method: "Get",
            url: `http://localhost:4000/auth/verify`,
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
            });
    }

    render() {
        // Verify if a good token //
        const { verified, isLoading } = this.state;
        const { component: Component, ...rest } = this.props;
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
            );
        } else {
            return <Redirect to='/menu-admin' />
        }
    }
}

export default withRouter(PrivateRoute);