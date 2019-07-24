import React from 'react'
import {Redirect} from "react-router-dom"
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import RC from '../pictures/RC.png'
import './css/Login.css'

class Login extends React.Component {

  render() {

    const {success, redirect} = this.props    
    // if token is true redirect directly in menu admin //
    if (this.props.verif === true) {
      return <Redirect to='/menu-admin' />
    }

    // Redirect when Admin is connect //
    if (redirect) {
      return <Redirect to='/menu-admin' />
    }

    return (

      <div className="adminFormIn" >

        <img className="iconUser" src={RC} alt="icone-user" />

        <div className="FormTitleIn">
          <p to="/signin" className="FormTitleIn__Link">Connexion</p>
        </div>

        <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.props.handleSub}
          >

            <TextValidator
              fullWidth
              label="Email"
              onChange={this.props.handleCha}
              name="email"
              value={this.props.email}
              validators={['required', 'isEmail']}
              errorMessages={['Email non valide', 'Email non valide.']}
            />

            <FormControl fullWidth >
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                label="Password"
                name="password"
                type={this.props.showPass ? 'text' : 'password'}
                value={this.props.password}
                onChange={this.props.handleCha}
                validators={['required']}
                errorMessages={['this field is required']}
                endAdornment={
                  <InputAdornment position="end">
                    {/* Icon Eye, for see the password on click */}
                    <IconButton aria-label="Toggle password visibility" onClick={this.props.toggleSho}>
                      {this.props.showPass ? <Visibility /> : <VisibilityOff />}
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

      </div>
    )
  }
}

export default Login