import React, { Component } from 'react'
import SelectionForm from './SelectionForm';
import Parameter from '../components/Parameter';

class Admin extends Component {
    render() {
        return (
            <div>
                <SelectionForm />
                <Parameter />
            </div>
        )
    }
}

export default Admin
