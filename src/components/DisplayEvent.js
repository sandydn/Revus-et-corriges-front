import React, {Component} from "react"
import axios from "axios"
import MaterialTable from 'material-table'
import moment from 'moment'

class DisplayEvent extends Component {
  state = {
    events: []
  }

  getData = async () => {
    const result = await axios.get("/a5/event")
    const reformatedData = []

    for (let i = 0; i<result.data.length; i++){
      const event = result.data[i]

      const dataToPush = {
        idevent : event.idevent,
        titre : event.titre,
        dateStart : moment(event.dateStart).format('DD MMMM YYYY'),
        description : event.description
      }
      reformatedData.push(dataToPush)
    }
    this.setState({ events: reformatedData })
  }

  delete = async (id) => {
    console.log(id)
    const token = localStorage.getItem("token")
    await axios.delete(`/a5/event/${id}`, 
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
            title="Supprimer un évènement"
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