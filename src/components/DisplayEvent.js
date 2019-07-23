import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

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
  render() {
    const { events } = this.state
    return (
      <div>
        <p>Display Event</p>
        {events.map(event => (
          <div key={event.idevent}>
            <p>
              {event.titre}
              {/* <Link to={`/edit/${event.idevent}`}> */}
                <input type="button" value="Delete" onClick={() => this.delete(event.idevent)}/>
              {/* </Link> */}
            </p>
          </div>
        ))}
      </div>
    )
  }
}

export default DisplayEvent