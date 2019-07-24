import React, { Component } from 'react';
import MaterialTable from 'material-table';

class TableEvent extends Component {
  state = {
    columns: [
      { title: 'Id', field: 'idevent' },
      { title: 'Titre', field: 'titre' },
      { title: 'Date', field: 'date', type: 'numeric' },
      { title: 'Description', field: 'description'}
    ],
    data: [
      { titre: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { titre: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 }
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