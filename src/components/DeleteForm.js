import React, { Component } from 'react'
// import Button from '@material-ui/core/Button';
// import InputInLine from './InputInLine';

class DeleteForm extends Component {

    state = {
        idevent: null,
        titre: null,
        importance: null,
        description: null,
        dateStart: null,
        dateEnd: null,
        cover: null,
        link: null,
        adresse: null,
        category: null
    }

    handleChange = (evt) => {
        console.log("evt", evt.target.value)
        this.setState({ [evt.target.name]: evt.target.value })
    }

    classDelete = this.props.data === null ? 'deleteNone' : 'delete'

    render() {
        console.log(this.props.data)
        return (

        <div className={this.classDelete}>
            {/* <div>{this.props.data}</div> */}
            <input
                className="input-area"
                title="Modifier" 
                name="titre"   
                value={this.state.name}
                placeholder={this.props.data}
                onChange={this.handleChange}
            />
            <button
                className="button-submit"
                type="submit"
                value="Submit"
                color="grey"
                variant="contained"
            >
                Valider
            </button>
        </div>

        )
    }
}

export default DeleteForm
