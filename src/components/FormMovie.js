import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify';
import moment from "moment"
// brick
import MenuAdmin from '../screen/MenuAdmin';
import InputInLine from '../elements/InputInLine';
import DropDownInlineSpec from '../elements/DropDownInlineSpec';
import InputWithCalendar from '../elements/InputWithCalendar'
import ButtonCustom from '../elements/ButtonCustom'
import AddContact from './AddContact'
// FUNC
import { GetData, PostDataMovie } from '../utilis'
// CSS
import 'react-toastify/dist/ReactToastify.css';

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
    dateCreation: new Date(),
    titre: '', // string qui doit etre parser
    contact: [],
    video: [],
    dataContact: [],
    allDataContact: [],
    dataVideo: [],
    allDataVideo: [],
    displayModalContact: false,
    addContact: false
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

  componentDidUpdate(prevState) {
    if (this.state.addContact != prevState.addContact) {
      // this.contact()
      console.log(this.state.addContact);
      
    }
  }

  // notify = (msg) => toast.error(msg)

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeDropDown = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  handleChangeDropDownSpec = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  onChangeDate = dateCreation => {
    if (moment(dateCreation).isAfter(moment().startOf('year')))
        return this.notify('La date de sortie du film ne peut être supérieur à la date du jour !')
        this.setState({dateCreation})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    PostDataMovie(this.state)
  }

  upModalContact = () => {
    const {displayModalContact} = this.state
    // inverse la valeur de {displayModalContact} (true/false)
    this.setState({displayModalContact: !displayModalContact} ,console.log(this.state.displayModalContact)
    )
  }

  lafunc = () => {
    console.log('un trux');
    
    this.setState({addContact: true})
  }

  renderModalContact = () => {
    const {displayModalContact} = this.state
    if (displayModalContact)
      return <AddContact close={this.upModalContact} con={this.lafunc}/>
  }

  render() {
    const {
      titre,
      dateCreation,
      contact,
      video,
      dataContact,
      dataVideo
    } = this.state
    console.log(video, dataVideo, contact, dataContact)
    return (
      <MenuAdmin style={{ background: '#E5E5E5'}}>
        {this.renderModalContact()}
        <div style={styleBase.globalForm}>
          <h2>Ajout d'un Film: </h2>
          <form style={styleBase.form}>

            <ButtonCustom
              title='Sauvegarder'
              type='submit'
              style={{ float: 'right' }}
              onClick={this.handleSubmit}
            />

            {/* TITRE */}
            <InputInLine
              keyState="titre"
              title="Titre"
              value={titre}
              func={this.handleChangeInput}
            />

            {/* DATE */}
            <div style={styleBase.date}>
              <InputWithCalendar
                keyState='dateCreation'
                title='Date de création'
                date={dateCreation}
                onChangeDate={this.onChangeDate}
              />
            </div>

            {/* REALISATEUR */}
            <DropDownInlineSpec
              keyState="contact"
              title='Réalisateur'
              data={this.state.dataContact}
              func={this.handleChangeDropDownSpec}
              buttonValue="Ajout réalisateur"
              button={true}
              funcButton={this.upModalContact}
            />

            {/* Distributeur */}
            <DropDownInlineSpec
              keyState="contact"
              title='Distributeur'
              data={this.state.dataContact}
              func={this.handleChangeDropDownSpec}
              buttonValue="Ajout distributeur"
              button={true}
              funcButton={this.upModalContact}
            />

            {/* ACTEUR */}
            <DropDownInlineSpec
              keyState="contact"
              title='Acteur'
              data={this.state.dataContact}
              func={this.handleChangeDropDownSpec}
              buttonValue="Ajout acteur"
              button={true}
              funcButton={this.upModalContact}
            />
          </form>
        </div>
        <ToastContainer />
      </MenuAdmin >
    )
  }
}

export default FormMovie