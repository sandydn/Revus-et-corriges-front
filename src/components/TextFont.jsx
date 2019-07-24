import React, { Component } from "react";
import FontPicker from "font-picker-react";
import axios from 'axios';

class TextFont extends Component {
    state = {
      activeFontFamily: "Helvetica Neue",
  }

  handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault()
    axios.put(`http://localhost:4000/a4/decoration/1`, ({
      textfont: this.state.activeFontFamily,
    }),
      {
        headers: {
          'x-access-token': `${token}`
        }
      }).then((res) => {
        alert("Police ajoutée !")
      }).catch((err) => {
      })
  }

  getStyle = async () => {
    await axios
      .get("http://localhost:4000/a4/decoration")
      .then(results => {
        const exactDeco = results.data[0]
        this.setState({ activeFontFamily : exactDeco.textfont })
        console.log(this.state)
      })
  }

  componentDidMount = () =>{
    this.getStyle()
  }

	
  render() {
    return (
      <div>
        <FontPicker
          apiKey="AIzaSyA3zC4mK2VJCsyk_YC-oauL62U5HHQT1E8"
          activeFontFamily={this.state.activeFontFamily}
          onChange={this.handleSubmit}
          onChange={nextFont =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
        <p className="apply-font">La police de ce texte sera appliquer sur le calendrier.</p>
        <button onClick={this.handleSubmit}>Envoyer</button>
      </div>
    )
  }
}

export default TextFont