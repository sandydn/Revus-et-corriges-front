import React from 'react';
import axios from 'axios';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import RC from '../pictures/RC.png'
import './css/Login.css'

class Login extends React.Component {

  state = {
    formData: {
      email: '',
      password: '',
    },
    showPassword: false,
    success: false,
    redirect: false
  };

  // Show password or not (icon-eye) //
  toggleShow = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  // ON SUBMIT - rediriger avec le routeur sur la e d'appel de formulaire
  handleSubmit = event => {
    event.preventDefault()
    axios.post(`http://localhost:4000/auth/login/`, {
      admin_email: event.target.email.value,
      admin_password: event.target.password.value
    })
      .then(() => {
        this.setState({ success: true }, () => {
          setTimeout(() => this.setState({ success: false }), 1400);
          setTimeout(() => this.setState({ redirect: true }), 1400);
        });
      });
  };


  render() {
    
    const { formData, success, redirect } = this.state;
    if (redirect) {
      return <Redirect to='/select-form' />
    }

    return (

      <div className="adminFormIn" >

        <img className="iconUser" src={RC} alt="icone-user" />

        <div className="FormTitleIn">
          <NavLink to="/signin" activeClassName="FormTitleIn__Link--Active" className="FormTitleIn__Link">Connexion</NavLink>
          <NavLink exact to="/signup" activeClassName="FormTitleUp__Link--Active" className="FormTitleUp__Link">Enregistrement</NavLink>
        </div>

        <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
          >

            <TextValidator
              fullWidth
              label="Email"
              onChange={this.handleChange}
              name="email"
              value={formData.email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'Email non valide.']}
            />

            <FormControl fullWidth >
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                label="Password"
                name="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={this.handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="Toggle password visibility" onClick={this.toggleShow}>
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>} />
            </FormControl>

            <div className="btnSignUp"></div>

            <Button
              type="submit"
              value="Submit"
              color="primary"
              variant="contained"
              disabled={success}
              fullWidth
            >
              {
                (success && 'Vous êtes connécté.')
                || (!success && 'Connexion')
              }
            </Button>

          </ValidatorForm>
        </div>

        <Link to="" variant="body2">
          {"Mot de passe oublié ?"}
        </Link>

      </div>
    );
  };
};

export default Login;