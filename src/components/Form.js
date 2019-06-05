import React, { Component } from 'react'
import axios from 'axios'
import "../components/Form.css"

class Form extends Component {
  state = {
    releaseDate: "",
    priority: "",
    title: "",
    director: "",
    editor:"",
    format:"",
    selectedFile:null
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  fileSelectedHandler = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  fileUploadhandler = e => {
const fd = new FormData()
fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
axios.post('/video', fd)
  }

  render() {
    return (
      <div>
        
        <h1> FORMULAIRE VIDEO</h1>
        <div>
                  
          <div className="containerCheckbox">
            <input id="toggle1" type="checkbox"/>
            <label for="toggle1">High</label>

            <input id="toggle2" type="checkbox"/>
            <label for="toggle2">Mid</label>

            <input id="toggle3" type="checkbox"/>
            <label for="toggle3">Low</label>
          </div>
          
        
          <form 
            className="adminForm"
            onSubmit={this.handleSubmit}
          >
            <input
              className="inputRelease"
              type="text" 
              name="releaseDate" 
              placeholder="JJ/MM/AAAA"
              value={this.state.releaseDate}
              onChange={this.handleChange}
            />


            <input 
              className="inputTitle"
              type="text" 
              name="title" 
              placeholder="movie's title"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <input 
              className="inputDirector"
              type="text" 
              name="director" 
              placeholder="directed by..."
              value={this.state.director}
              onChange={this.handleChange}
            />
            
            <input
              className="inputEditor" 
              type="text" 
              name="editor" 
              placeholder="edited by..."
              value={this.state.editor}
              onChange={this.handleChange}
            />
        
            <input 
              className="inputFormat" 
              type="text" 
              name="format" 
              placeholder="DVD/BLU-RAY..."
              value={this.state.format}
              onChange={this.handleChange}
            />
            
            <input
              className='hiddenInput' 
              onChange={this.fileSelectedHandler}
              ref = {fileInput => this.fileInput=fileInput}      
              type="file" 
            />
            
            <button
              className='buttonPick' 
              onClick={() => this.fileInput.click()}>
                Pick File
            </button>
            
            <button
            className="buttonUpload" 
              onClick={this.fileUploadhandler}>
                Upload
            </button>

          </form>
        </div>

      </div>
    )
  }
}

export default Form

