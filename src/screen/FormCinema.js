import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import './FormCinema.css'

class FormCinema extends Component {
    state = {
        name:"",
        date: "",
        description: "",
        src: "",
        link: "",
        success: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     axios.post(``,{
    //         email: event.target.email.value,
    //         password: event.target.password.value
    //     })
    //     .then(() => {
    //         this.setState({ success: true })
    //     })
    // }
// ON SUBMIT - rediriger avec le routeur sur la page d'appel de formulaire

    render() {
        return (
            <div >
                                <Link to="/select-form" ><input type="submit" value="Retour formulaire" /></Link>
                <form className="formCinema" onSubmit={this.handleSubmit}>
                <h3>Nom</h3> 
                    <input
                    type="text" 
                    name="name" 
                    placeholder="Nom Cinema"
                    value={this.state.name}
                    onChange={this.handleChange}/>

                <h3>Date</h3> 
                    <input 
                    type="text"
                    name="date" 
                    placeholder="jj/mm/aaaa"
                    value={this.state.date}
                    onChange={this.handleChange}/>

                <h3>Description</h3> 
                    <input 
                    type="text"
                    name="description" 
                    placeholder="Déscription"
                    value={this.state.importance}
                    onChange={this.handleChange}/>

                <h3>Fond d'écran</h3> 
                    <input 
                    type="text"
                    name="src" 
                    placeholder="Titre"
                    value={this.state.src}
                    onChange={this.handleChange}/>

                <h3>Liens</h3> 
                    <input 
                    type="text"
                    name="link"
                    placeholder="Lien externes"
                    value={this.state.link}
                    onChange={this.handleChange}/>
                
                <Link to="/" ><input type="submit" value="Submit" /></Link>
                </form>
                {this.state.success ? <p>Formulaire créer avec succée.</p> : null}
            </div>
        )
    }
}

export default FormCinema