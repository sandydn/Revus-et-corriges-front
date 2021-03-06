import React, {Component} from "react"
import FontPicker from "font-picker-react"
import axios from 'axios'

class TextFont extends Component {
    state = {
      activeFontFamily: "Helvetica Neue",
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration/1/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration/1'
    }
    axios.put(pathApi, ({
      textfont: this.state.activeFontFamily,
    }),
    {headers: {
      'x-access-token': `${token}`
        }
      })
      .then((res) => {
        alert("Police ajoutée !")
      })
      .catch((err) => {
      })
  }

  getStyle = async () => {
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a4/decoration'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a4/decoration'
    }
    await axios
      .get(pathApi)
      .then(results => {
        const exactDeco = results.data[0]
        this.setState({ activeFontFamily : exactDeco.textfont })
      })
  }

  componentDidMount = () =>{
    this.getStyle()
  }
	
  render() {
    return (
      <div>
        <h3>Changer la police du calendrier</h3>
        <FontPicker
          apiKey="AIzaSyA49kTyI5zOydULH_tQ2RbNtM_FC4qngAg"
          activeFontFamily={this.state.activeFontFamily}
          onChange={nextFont =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
        <p className="apply-font">La police de ce texte sera appliquée sur le calendrier.</p>
        <button onClick={this.handleSubmit}>Envoyer</button>
      </div>
    )
  }
}

export default TextFont