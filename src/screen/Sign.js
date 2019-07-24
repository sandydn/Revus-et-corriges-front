import React, {Component} from 'react'
import Login from '../components/Login'

class Sign extends Component {

	render() {
		return (
			<div>
				<Login verif={this.props.verif}
					redirect={this.props.redirect}
					success={this.props.success}
					email={this.props.email}
					password={this.props.password}
					handleSub={this.props.handleSub}
					handleCha={this.props.handleCha}
					showPass={this.props.showPass}
					toggleSho={this.props.toggleSho} />
			</div>
		)
	}
}

export default Sign
