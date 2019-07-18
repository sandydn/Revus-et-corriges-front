import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import RC from '../pictures/RC.png'
import './css/Login.css'

class RegisterLogin extends React.Component {

	state = {
		formData: {
			name: '',
			email: '',
			password: '',
			repeatPassword: '',
		},
		showPassword: false,
		success: false,
	};


	handleChange = event => {
		const { formData } = this.state;
		formData[event.target.name] = event.target.value;
		this.setState({ formData });
	};


	handleSubmit = event => {
		event.preventDefault()
		axios.post(`http://localhost:4000/auth/register/`, {
			name: event.target.name.value,
			admin_email: event.target.email.value,
			admin_password: event.target.password.value,
		})
			.then(() => {
				this.setState({ success: true }, () => {
					setTimeout(() => this.setState({ success: false }), 1400);
					setTimeout(() => this.setState({ redirect: true }), 1400);
				});
			});
	};

	componentDidMount() {
		// custom rule will have name 'isPasswordMatch'
		ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
			const { formData } = this.state;
			if (value !== formData.password) {
				return false;
			}
			return true;
		});
	}

	render() {
		const { formData, success, redirect } = this.state;
		if (redirect) {
			return <Redirect to='/menu-admin' />
		}

		return (

			<div className="adminFormUp" >

				<img className="iconUser" src={RC} alt="icone-user" />

				<div className="FormTitleUp">
					<p exact to="/signup" className="FormTitleUp__Link">Enregistrement</p>
				</div>

				<div>
					<ValidatorForm
						ref="form"
						onSubmit={this.handleSubmit}
					>

						<TextValidator
							fullWidth
							label="Nom, Prénom"
							onChange={this.handleChange}
							name="name"
							value={formData.name}
						/>

						<TextValidator
							fullWidth
							label="Email"
							onChange={this.handleChange}
							name="email"
							value={formData.email}
							validators={['required', 'isEmail']}
							errorMessages={['this field is required', 'Email non valide.']}
						/>

						<FormControl fullWidth>
							<InputLabel htmlFor="adornment-password">Mot de Passe</InputLabel>
							<Input
								label="Password"
								name="password"
								fullWidth
								type={this.state.showPassword ? 'text' : 'password'}
								value={formData.password}
								onChange={this.handleChange}
								validators={['required']}
								errorMessages={['this field is required']} />
						</FormControl>

						<TextValidator fullWidth
							label="Confirmer Mot de Passe"
							onChange={this.handleChange}
							name="repeatPassword"
							type="password"
							validators={['isPasswordMatch', 'required']}
							errorMessages={['Les mots de passe ne correspondent pas.', 'this field is required']}
							value={formData.repeatPassword}
						/>

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
								(success && 'Compte crée.')
								|| (!success && 'Inscription')
							}
						</Button>

					</ValidatorForm>

				</div>
			</div>
		);
	};
};

export default RegisterLogin;