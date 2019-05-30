import React from 'react'
import axios from 'axios'
import icon from '../pictures/eye.png'
import {Link} from 'react-router-dom';
// import SelectionForm from './SelectionForm'

// import '../App.css'

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        showPassword: false,
        success: false
    }

    toggleShow = event => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        axios.post(`http://localhost:4242/adminform`,{
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then(() => {
            this.setState({ success: true })
        })
    }
// ON SUBMIT - rediriger avec le routeur sur la page d'appel de formulaire

    render() {
        return (
            <div className="adminForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text" 
                    name="email" 
                    placeholder="@"
                    value={this.state.email}
                    onChange={this.handleChange}/>

                    <input 
                    type= {this.state.showPassword ? "password" : "text"}
                    name="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                    <img src={icon} className="iceye" onClick={this.toggleShow} alt="eye"/>

                    <Link to="/select-form" ><input type="submit" value="Submit" /></Link>
                </form>
                {this.state.success ? <p>Vous êtes connecté.</p> : null}
            </div>
        )
    }
}

export default Login;

