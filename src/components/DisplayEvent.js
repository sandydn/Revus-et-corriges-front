import React, {Component} from "react"
import axios from "axios"
import MaterialTable from 'material-table'

class DisplayEvent extends Component {
  state = {
    events: []
  }

  getData = async () => {
    const result = await axios.get("http://localhost:4000/a5/event")
    console.log(result.data)
    this.setState({ events: result.data })
  }

  delete = async (id) => {
    console.log(id)
    const token = localStorage.getItem("token")

    await axios.delete(`http://localhost:4000/a5/event/${id}`, 
    {headers: {
      'x-access-token': `${token}`
      }
  })
  }

  componentDidMount() {
    this.getData()
  }
  
  handleDelete = async (id) => {
    await this.delete(id)
    this.getData()
  }

  columns = [
    { title: 'Id', field: 'idevent' },
    { title: 'Titre', field: 'titre' },
    { title: 'Date', field: 'dateStart' },
    { title: 'Description', field: 'description'}
  ]

  render() {
    return (
      <div className='tableDeleteEvent'>

         <MaterialTable
            title="Supprimer un evenement"
            columns={this.columns}
            data={this.state.events}
            id={this.state.events.idevent}
            editable={{
              onRowDelete: tuple => 
              new Promise(resolve =>{
                this.delete(tuple.idevent)
                setTimeout(()=>{
                  resolve()
                  this.getData()
                   }, 600)
                })
            }}
          />
      </div>
    )
  }
}

export default DisplayEvent