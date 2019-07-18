import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// brick
import MenuAdmin from '../screen/MenuAdmin';
import InputInLine from '../elements/InputInLine';
import DropDownInline from '../elements/DropDownInline';
import DropDownInlineSpec from '../elements/DropDownInlineSpec';
import InputWithCalendar from '../elements/InputWithCalendar'
import TextareaCustom from '../elements/TextareaCustom';
import ButtonCustom from '../elements/ButtonCustom'
import AddContact from './AddContact'
// FUNC
import { GetData, PostDataCinema } from '../utilis'
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

class FormCinema extends Component {

  state = {
    category: 2,
    titre: '',
    dateStart: new Date(),
    importance: 0, // valeur de 1 a 3
    adresse: [], // array de string doit etre joint /
    link: '',
    cover: '',
    video: '', // string qui doit etre parser
    contact: '',
    description: '',
    //no send
    inputAdress: ['Adresse'],
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

  addInputAdress = () => {
    const { inputAdress } = this.state
    const newInput = `${inputAdress[0]}${inputAdress.length}`
    this.setState({ inputAdress: inputAdress.concat([newInput]) })
  }

  RemoveInputAdress = () => {
    const { inputAdress, adresse } = this.state
    const newInput = inputAdress
    const newInputAdresse = adresse
    newInput.pop()
    newInputAdresse.pop()
    this.setState({ inputAdress: newInput })
    this.setState({ adresse: newInputAdresse })
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
    PostDataCinema(this.state)
  }

  upModalContact = () => {
    const { displayModalContact } = this.state
    // inverse la valeur de {displayModalContact} (true/false)
    this.setState({ displayModalContact: !displayModalContact})
  }

  renderModalContact = () => {
    const { displayModalContact } = this.state
    if (displayModalContact)
      return <AddContact close={this.upModalContact}/>
  }

  render() {
    const {
      titre,
      dateStart,
      adresse,
      link,
      cover,
      contact,
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

            {/* ADRESSE */}
            <div id='div-adress-event' style={styleBase.divAdresse}>
              <ButtonCustom
                title='+'
                style={{ float: 'right', width: '40px' }}
                onClick={this.addInputAdress}
              />
              {inputAdress.map((e, i) => {
                return (
                  <InputInLine
                    index={i}
                    keyState="adresse"
                    title={e}
                    value={adresse[i]}
                    func={this.handleChangeInputAdress}
                    del={i + 1 === inputAdress.length && i !== 0 ? true : false}
                    funcDel={this.RemoveInputAdress}
                  />)
              })
              }
            </div>

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

            {/* INTERVENANT */}
            <DropDownInlineSpec
              keyState="contact"
              title='Intervenant'
              data={contact}
              func={this.handleChangeDropDownSpec}
              buttonValue="ADD contact"
              button={true}
              funcButton={this.upModalContact}
            />

            {/* DESCRIPTION */}
            <TextareaCustom
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

export default FormCinema