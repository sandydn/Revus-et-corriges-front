import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import TableEvent from "../elements/TableEvent";
import MaterialTable from 'material-table';

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
    const { events } = this.state
    return (
      <div className='tableDeleteEvent'>


        {/* <p>Display Event</p>
        {events.map(event => (
          <div key={event.idevent}>
            <p>
              {event.titre}
              <Link to={`/edit/${event.idevent}`}>
                <input type="button" value="Delete" onClick={() => this.delete(event.idevent)}/>
              </Link>
            </p>
          </div>
        )
        )
        } */}



         <MaterialTable
        title="Editable Example"
        columns={this.columns}
        data={this.state.events}
        id={this.state.events.idevent}
        editable={{
        // onRowDelete: this.delete()

        onRowDelete: tuple => 
        new Promise(resolve =>{
          this.delete(tuple.idevent)
          setTimeout(()=>{
            resolve()
            this.getData()
            // this.handleDelete(tuple.idevent)
          }, 600)
        })

        
         
     
      }}
      />
      </div>
    )
  }
}

export default DisplayEvent