import React, {Component} from "react"
import axios from "axios"
import MaterialTable from 'material-table'
import moment from 'moment'

class DisplayEvent extends Component {
  state = {
    events: []
  }

  getData = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event'
    }
    const result = await axios.get(pathApi)
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
    let pathApi = process.env.REACT_APP_PATH_API_DEV + `/a5/event/${id}`
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + `/a5/event/${id}`
    }
    const token = localStorage.getItem("token")
    await axios.delete(pathApi, 
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