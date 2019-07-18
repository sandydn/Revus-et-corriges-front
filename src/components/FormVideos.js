import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// brick
import MenuAdmin from '../screen/MenuAdmin';
import InputInLine from '../elements/InputInLine';
import DropDownInline from '../elements/DropDownInline';
import DropDownInlineSpec from '../elements/DropDownInlineSpec';
import InputWithCalendar from '../elements/InputWithCalendar'
import TextAreaCustom from '../elements/TextAreaCustom';
import ButtonCustom from '../elements/ButtonCustom'
import AddContact from './AddContact'
// FUNC
import { GetData, PostDataVideo } from '../utilis'
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

class FormVideo extends Component {

  state = {
    category: 2,
    titre: '',
    dateStart: new Date(),
    importance: 0, // valeur de 1 a 3
    link: '',
    cover: '',
    video: '', // string qui doit etre parser
    format: '',
    contact: '',
    description: '',
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

  notify = (msg) => toast.error(msg);

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeInputAdress = (keyState, evt) => {
    const { adresse } = this.state
    const index = evt.target.getAttribute('data-index')
    adresse[index] = evt.target.value
    this.setState({ [keyState[index]]: adresse })
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
    PostDataVideo(this.state)
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
      dateStart,
      link,
      cover,
      contact,
      format,
      description,
      //no send
      inputAdress,
      dataVideo
    } = this.state
    return (
      <MenuAdmin style={{ background: '#E5E5E5' }}>
        {this.renderModalContact()}
        <div style={styleBase.globalForm}>
          <h2>Ajout Cinéma: </h2>
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
                title='Date sortie'
                date={dateStart}
                onChangeDate={this.onChangeDateStart}
                keyState="dateStart"
              />
            </div>


            {/* IMPORTANCE */}
            <DropDownInline
              keyState='importance'
              title='Importance'
              data={['RC', 'Partenaires', 'Général']}
              func={this.handleChangeDropDown}
            />

            {/* LINK */}
            <InputInLine
              keyState="link"
              title="Lien Externe"
              value={link}
              func={this.handleChangeInput}
            />

            {/* COVER */}
            <InputInLine
              keyState="cover"
              title="Image"
              value={cover}
              func={this.handleChangeInput}
            />

            {/* VIDEO */}
            <DropDownInlineSpec
              keyState="video"
              title='Film'
              data={dataVideo}
              func={this.handleChangeDropDownSpec}
            />

            {/* FORMAT */}
            <InputInLine
              keyState="format"
              title="Format"
              value={format}
              func={this.handleChangeInput}
            />

            {/* INTERVENANT */}
            <DropDownInlineSpec
              keyState="contact"
              title='Editeur'
              data={contact}
              func={this.handleChangeDropDownSpec}
              buttonValue="ADD contact"
              button={true}
              funcButton={this.upModalContact}
            />

            {/* DESCRIPTION */}
            <TextAreaCustom
              keyState="description"
              func={this.handleChangeInput}
              value={description}
            />
          </form>
        </div>

        <ToastContainer />
      </MenuAdmin >
    )
  }
}

export default FormVideo