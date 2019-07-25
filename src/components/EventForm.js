import React, {Component} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import moment from "moment"
// brick
import ButtonCustom from '../elements/ButtonCustom'
import DropDownInline from '../elements/DropDownInline'
import DropDownInlineSpec from '../elements/DropDownInlineSpec'
import InputInLine from '../elements/InputInLine'
import InputWithCalendar from '../elements/InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin'
import TextareaCustom from '../elements/TextareaCustom'
// FUNC
import {GetData, PostDataEvent} from '../utilis'
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

class EventForm extends Component {
  state = {
    category: 1,
    titre: '',
    dateStart: new Date(),
    dateEnd: new Date(),
    importance: 0, 
    adresse: [],
    link: '',
    cover: '',
    video: '', 
    description: '',
    inputAdress: ['Adresse'],
    dataVideo: [],
    allDataVideo: []
  }

  componentDidMount() {
    const video = GetData('/a7/video')
    video.then((res) => {
      const data = Array.from(res.data)
      this.setState({allDataVideo: data})
      const titleVideo = data.map(e => e.titre)      
      this.setState({dataVideo: titleVideo})
    })    
  }

  notify = (msg) => toast.error(msg);

  handleChangeInput = (keyState, evt) => {
    this.setState({ [keyState]: evt.target.value })
  }

  handleChangeInputAdress = (keyState, evt) => {
    const {adresse} = this.state
    const index = evt.target.getAttribute('data-index')
    adresse[index] = evt.target.value
    this.setState({ [keyState[index]]: adresse })
  }

  handleChangeDropDown = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  handleChangeDropDownSpec = (keyState, value) => {
    this.setState({ [keyState]: value })
  }

  addInputAdress = () => {
    const { inputAdress } = this.state
    const newInput = `${inputAdress[0]}${inputAdress.length}`
    this.setState({ inputAdress: inputAdress.concat([newInput])})
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
    if (moment(dateStart).isBefore(moment().startOf('day')))
      return this.notify('La date de debut ne peut être inférieure à la date de fin !')
    this.setState({ dateStart })
  }

  onChangeDateEnd = dateEnd => {
    if (dateEnd < this.state.dateStart)
    this.setState({ dateEnd })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    PostDataEvent(this.state)
    return this.notify(`L'événement est bien enregistré !`)
  }

  render() {
    const {
      titre,
      dateStart,
      dateEnd,
      adresse,
      link,
      cover,
      description,
      inputAdress,
    } = this.state
    return (
      <MenuAdmin style={{ background: '#E5E5E5' }}>
        
        <div style={styleBase.globalForm}>
          <h2>Ajouter un évènement: </h2>
          <div style={styleBase.form} >
            
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
                title='Date de début'
                date={dateStart}
                onChangeDate={this.onChangeDateStart}
                keyState="dateStart"
                value={dateStart}
              />
              <InputWithCalendar
                title='Date de fin'
                date={dateEnd}
                onChangeDate={this.onChangeDateEnd}
                keyState="dateEnd"
                value={dateEnd}
                func={this.handleChangeInput}
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
                style={{ float: 'right', width: '40px'}}
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
            
            {/* cover */}
            <InputInLine
              keyState="cover"
              title="Image"
              value={cover}
              func={this.handleChangeInput}
            />
            
            {/* VIDEO */}
            <DropDownInlineSpec
              keyState="video"
              title='Films'
              data={this.state.dataVideo}
              func={this.handleChangeDropDownSpec}
            />
            
            {/* DESCRIPTION */}
            <TextareaCustom
              keyState="description"
              func={this.handleChangeInput}
              value={description}
            />

            <ButtonCustom
              title='Sauvegarder'
              type='submit'
              style={{float: 'right'}}
              onClick={this.handleSubmit}
            />

          </div>
        </div>
        <ToastContainer />
      </MenuAdmin >
    )
  }
}

export default EventForm