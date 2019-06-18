import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import RC from '../pictures/RC.png'
import './Login.css'

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

  // ON SUBMIT - rediriger avec le routeur sur la page d'appel de formulaire
  handleSubmit = event => {
    event.preventDefault()
    axios.post(`http://localhost:4242/auth/login/`, {
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
      if (redirect){
        return <Redirect to='/select-form'/>
      }

    return (
        <form className="adminForm" onSubmit={this.handleSubmit}>

          <img className="iconUser" src={RC} alt="icone-user" />
          {/* <p className="titleLogin">Login</p> */}

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

            <FormControl>
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

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

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
                || (!success && 'Submit')
              }
            </Button>
          </ValidatorForm>

          <Link to="" variant="body2">
            {"Mot de passe oublié ?"}
          </Link>

        </form>
    );
  };
};

export default Login;