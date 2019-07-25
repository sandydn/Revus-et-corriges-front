import React, {Component} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import moment from "moment"
import YearPicker from "react-year-picker"
// brick
import AddContact from './AddContact'
import ButtonCustom from '../elements/ButtonCustom'
import DropDownInlineSpec from '../elements/DropDownInlineSpec'
import InputInLine from '../elements/InputInLine'
import MenuAdmin from '../screen/MenuAdmin'
// FUNC
import {GetData, PostDataMovie} from '../utilis'
// CSS
import 'react-toastify/dist/ReactToastify.css'


const styleBase = {
  globalForm: {
    margin: '0 0 0 5%',
    minWidth: '60%',
  },
  form: {
    width: '100%',
    borderLeft: '1px solid black',
    borderTop: '2px solid black',
    padding: '10px'
  },
  date: {
    display: 'flex'
  },
  divAdresse: {
    border: '1px solid silver',
    padding: '10px',
    borderRadius: '2px'
  }
}

class FormMovie extends Component {

  state = {
    titre: '',
    dateCreation: new Date(),
    contact: '',
    dataContact: [],
    allDataContact: [],
    displayModalContact: false,
  }


  contact = () => {
    const contact = GetData('http://localhost:4000/a2/contact')
    contact.then((res) => {
        const data = Array.from(res.data)
        this.setState({allDataContact: data})
        const nameContact = data.map(e => e.nom)
        this.setState({dataContact: nameContact})
    })
  }

  componentDidMount() {
    this.contact()
  }

  notify = (msg) => toast.error(msg)

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeDropDown = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  handleChangeDropDownSpec = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  onChange = dateCreation => {
    this.setState({dateCreation: moment(dateCreation).format('YYYY')})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    PostDataMovie(this.state) 
    return this.notify('Le film est bien enregistré !')   
  }
  
  upModalContact = () => {
    const {displayModalContact} = this.state
    this.setState({displayModalContact: !displayModalContact})
    this.contact()
  }

  renderModalContact = () => {
    const {displayModalContact} = this.state
    if (displayModalContact)
      return <AddContact close={this.upModalContact}/>
  }

  render() {
    const {
      titre,
      dateCreation
    } = this.state
    return (
      <MenuAdmin style={{ background: '#E5E5E5'}}>
        {this.renderModalContact()}
        <div style={styleBase.globalForm}>
          <h2>Ajout d'un Film: </h2>
          <form style={styleBase.form}>

            {/* TITRE */}
            <InputInLine
              keyState="titre"
              title="Titre"
              value={titre}
              func={this.handleChangeInput}
            />

            {/* DATE */}
            <div style={styleBase.date}>
              <YearPicker
                keyState='dateCreation'
                title='Année de création du film'
                date={dateCreation}
                onChange={this.onChange}
              />
            </div>

            {/* CONTACT */}
            <DropDownInlineSpec
              keyState='contact'
              title='Contact'
              data={this.state.dataContact}
              func={this.handleChangeDropDownSpec}
              buttonValue='Ajout contact'
              button={true}
              funcButton={this.upModalContact}
            />

            <ButtonCustom
              title='Sauvegarder'
              type='submit'
              style={{ float: 'right' }}
              onClick={this.handleSubmit}
            />
            
          </form>
        </div>
        <ToastContainer />
      </MenuAdmin >
    )
  }
}

export default FormMovie