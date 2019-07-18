import React, { Component } from 'react'
// brick
import MenuAdmin from '../screen/MenuAdmin';
import InputInLine from '../elements/InputInLine';
import DropDownInline from '../elements/DropDownInline';
import DropDownInlineSpec from '../elements/DropDownInlineSpec';
import InputWithCalendar from '../elements/InputWithCalendar'
import ButtonCustom from '../elements/ButtonCustom'
import AddContact from './AddContact'
// FUNC
import { GetData, PostDataMovie } from '../utilis'

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

class FormCinema extends Component {

  state = {
    dateCreation: new Date(),
    titre: '', // string qui doit etre parser
    contact: [],
    //no send
    dataVideo: [],
    allDataVideo: [],
    displayModalContact: false
  }

  // componentDidMount() {
  //   const video = GetData('http://localhost:4000/a7/video')
  //   video.then((res) => {
  //     const data = Array.from(res.data)
  //     this.setState({ allDataVideo: data })
  //     const titleVideo = data.map(e => e.titre)
  //     this.setState({ dataVideo: titleVideo })
  //   })
  // }

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeDropDown = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  handleChangeDropDownSpec = (keyState, value) => {
    console.log(value)
    this.setState({ [keyState]: value })
  }

  onChangeDateStart = dateStart => {
    if (dateStart > this.state.dateEnd && this.state.dateEnd)
      return this.notify('La date de debut ne peut être inférieur à la date de fin !')
    this.setState({ dateStart })
  }

  onChangeDateEnd = dateEnd => {
    if (dateEnd < this.state.dateStart)
      return console.log('error')
    this.setState({ dateEnd })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    PostDataMovie(this.state)
  }

  upModalContact = () => {
    const { displayModalContact } = this.state
    // inverse la valeur de {displayModalContact} (true/false)
    this.setState({ displayModalContact: !displayModalContact })
  }

  renderModalContact = () => {
    const { displayModalContact } = this.state
    if (displayModalContact)
      return <AddContact close={this.upModalContact} />
  }

  render() {
    const {
      titre,
      dateCreation,
      contact,
      //no send
      dataVideo
    } = this.state
    return (
      <MenuAdmin style={{ background: '#E5E5E5' }}>
        {this.renderModalContact()}
        <div style={styleBase.globalForm}>
          <h2>Ajout d'un Film: </h2>
          <form style={styleBase.form} onSubmit={this.handleSubmit}>

            <ButtonCustom
              title='Sauvegarder'
              type='submit'
              style={{ float: 'right' }}
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
                title='Date de création'
                date={dateCreation}
                onChangeDate={this.onChangeDateStart}
                keyState="dateCreation"
              />
            </div>

            {/* REALISATEUR */}
            <DropDownInlineSpec
              keyState="contact"
              title='Réalisateur'
              data={contact}
              func={this.handleChangeDropDownSpec}
              buttonValue="ADD contact"
              button={true}
              funcButton={this.upModalContact}
            />

            {/* Distributeur */}
            <DropDownInlineSpec
              keyState="contact"
              title='Distributeur'
              data={contact}
              func={this.handleChangeDropDownSpec}
              buttonValue="ADD contact"
              button={true}
              funcButton={this.upModalContact}
            />

            {/* ACTEUR */}
            <DropDownInlineSpec
              keyState="contact"
              title='Acteur'
              data={contact}
              func={this.handleChangeDropDownSpec}
              buttonValue="ADD contact"
              button={true}
              funcButton={this.upModalContact}
            />
          </form>
        </div>
      </MenuAdmin >
    )
  }
}

export default FormCinema