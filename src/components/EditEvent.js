import React, {Component} from "react"
import axios from "axios"

class EditEvent extends Component {
  state = {
    dataEvents: []
  }
  getData = async () => {
    const id = this.props.match.params.id
    const results = await axios.get(`/a5/event/${id}`)
    console.log(results.data)
    this.setState({ dataEvents: results.data[0] })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    console.log("yolo", this)
    return (
      <div>
        Créer un évènement:
        <p>{this.state.dataEvents.titre}</p>
      </div>
    )
  }
}

export default EditEvent