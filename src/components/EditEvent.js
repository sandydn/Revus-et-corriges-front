import React, {Component} from "react"
import axios from "axios"

class EditEvent extends Component {
  state = {
    dataEvents: []
  }
  getData = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event'
    }
    const id = this.props.match.params.id
    const results = await axios.get(pathApi)
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