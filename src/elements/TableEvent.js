import React, { Component } from 'react';
import MaterialTable from 'material-table';

class TableEvent extends Component {
  state = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      { title: 'Birth Place', field: 'birthCity'}
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 }
    ]
  }


  render() {
    return (
      <MaterialTable
        title="Editable Example"
        columns={this.state.columns}
        data={this.state.data}
      />
    );
  }
}

export default TableEvent 