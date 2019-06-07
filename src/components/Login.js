import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

// import iconLogin from '../pictures/login.png'
import RC from '../pictures/RC.png'
import './Login.css'

class Login extends React.Component {
	state = {
		email: "",
		password: "",
		showPassword: false,
		success: false
	}

	toggleShow = () => {
		this.setState({ showPassword: !this.state.showPassword })
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
		console.log("this state", this.state)
	}

	handleSubmit = event => {
		event.preventDefault()
		axios.post(`http://localhost:4242/a6/adminform/`, {
			admin_email: event.target.email.value,
			admin_password: event.target.password.value
		})
			.then(() => {
				this.setState({ success: true })
			})
	}
	// ON SUBMIT - rediriger avec le routeur sur la page d'appel de formulaire

	render() {
		return (
			<div>
				<form className="adminForm" onSubmit={this.handleSubmit}>
					{/*<img className="iconLogin" src={iconLogin} alt="icone-login" /> */}
					<img className="iconUser" src={RC} alt="icone-user" />
					<p className="titleLogin">Login</p>
					<TextField
						margin="normal"
						fullWidth
						id="email"
						label="Email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						autoComplete="email"
						autoFocus
					/>

					<FormControl className="">
						<InputLabel htmlFor="adornment-password">Password</InputLabel>
						<Input
							id="password"
							name="password"
							fullWidth
							type={this.state.showPassword ? 'text' : 'password'}
							value={this.state.password}
							onChange={this.handleChange}
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
						fullWidth
						variant="contained"
						color="primary"
					>Connexion</Button>
					
					{this.state.success ? <p>Vous êtes connecté.</p> : null}

					<Link to="" variant="body2">
						{"Mot de passe oublié ?"}
					</Link>

				</form>
			</div>
		)
	}
}

export default Login;