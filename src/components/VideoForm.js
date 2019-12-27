import React, {Component} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import moment from "moment"
// brick
import AddContact from './AddContact'
import ButtonCustom from '../elements/ButtonCustom'
import DropDownInline from '../elements/DropDownInline'
import DropDownInlineSpec from '../elements/DropDownInlineSpec'
import InputInLine from '../elements/InputInLine'
import InputWithCalendar from '../elements/InputWithCalendar'
import MenuAdmin from '../screen/MenuAdmin'
import TextareaCustom from '../elements/TextareaCustom'
// FUNC
import {GetData, PostDataCinema} from '../utilis'
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

class VideoForm extends Component {
    state = {
        category: 2,
        titre: '',
        dateStart: new Date(),
        importance: 0,
        adresse: [],
        link: '',
        cover: '',
        video: '',
        contact: '',
        description: '',
        inputAdress: ['Adresse'],
        dataVideo: [],
        allDataVideo: [],
        dataContact: [],
        allDataContact: [],
        displayModalContact: false
    }
    
    contact = () => {
        setTimeout(_ => {
              const contact = GetData('/a2/contact')
        contact.then((res) => {
            const data = Array.from(res.data)
            this.setState({allDataContact: data})
            console.log(data)
            const nameContact = data.map(e => e.nom)
            this.setState({dataContact: nameContact})
        })
      }, 1000) 
    
    }
    

    componentDidMount() {
        const video = GetData('/a7/video')
        video.then((res) => {
            const data = Array.from(res.data)
            this.setState({allDataVideo: data})
            const titleVideo = data.map(e => e.titre)
            this.setState({dataVideo: titleVideo})
        })
        this.contact()
    }

    notify = (msg) => toast.error(msg)

    handleChangeInput = (keyState, evt) => {
        this.setState({[keyState]: evt.target.value})
    }

    handleChangeInputAdress = (keyState, evt) => {
        const {adresse} = this.state
        const index = evt.target.getAttribute('data-index')
            adresse[index] = evt.target.value
            this.setState({[keyState[index]]: adresse})
    }

    handleChangeDropDown = (keyState, value) => {
        this.setState({[keyState]: value})
    }

    handleChangeDropDownSpec = (keyState, value) => {
        this.setState({[keyState]: value})
    }

    addInputAdress = () => {
        const {inputAdress} = this.state
        const newInput = `${inputAdress[0]}${inputAdress.length}`
        this.setState({inputAdress: inputAdress.concat([newInput])})
    }

    RemoveInputAdress = () => {
        const {inputAdress, adresse} = this.state
        const newInput = inputAdress
        const newInputAdresse = adresse
            newInput.pop()
            newInputAdresse.pop()
            this.setState({inputAdress: newInput})
            this.setState({adresse: newInputAdresse})
    }

    onChangeDate = dateStart => {
        if (moment(dateStart).isBefore(moment().startOf('day')))
            return this.notify('La date de sortie ne peut être antérieure à la date du jour !')
            this.setState({dateStart})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        PostDataCinema(this.state)
        return this.notify('La sortie DVD/Blu-ray est bien enregistrée !')   
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

    render () {
        const {
            titre,
            dateStart,
            adresse,
            link,
            cover,
            description,
            inputAdress
        } = this.state
        return (
            <MenuAdmin style={{background: '#E5E5E5'}}>
                {this.renderModalContact()}
                <div style={styleBase.globalForm}>
                    <h2>Ajout Sortie Cinéma:</h2>
                    <form style={styleBase.form}>

                    {/* TITRE */}
                    <InputInLine
                        keyState='titre'
                        title='Titre'
                        value={titre}
                        func={this.handleChangeInput}
                    />

                    {/* DATE */}
                    <div style={styleBase.date}>
                        <InputWithCalendar
                            keyState='dateStart'
                            title='Date de sortie'
                            date={dateStart}
                            onChangeDate={this.onChangeDate}
                        />
                    </div>

                    {/* IMPORTANCE */}
                    <DropDownInline
                        keyState='importance'
                        title='Importance'
                        data={['R&C','Partenaires','Général']}
                        func={this.handleChangeDropDown}
                    />

                    {/* ADRESSE */}
                    <div id='div-adress-event' style={styleBase.divAdresse}>
                        <ButtonCustom
                            title='+'
                            style={{float: 'right', width: '40px'}}
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
                                    del={i + 1 === inputAdress.length && i !== 0 ? true: false}
                                    funcDel={this.RemoveInputAdress}
                                />)
                        })}
                    </div>

                    {/* LINK */}
                    <InputInLine
                        keyState='link'
                        title='Lien Externe'
                        value={link}
                        func={this.handleChangeInput}
                    />

                    {/* COVER */}
                    <InputInLine
                        keyState='cover'
                        title='Image'
                        value={cover}
                        func={this.handleChangeInput}
                    />

                    {/* VIDEO */}
                    <DropDownInlineSpec
                        keyState='video'
                        title='Film'
                        data={this.state.dataVideo}
                        func={this.handleChangeDropDownSpec}
                    />

                    {/* CONTACT */}
                    <DropDownInlineSpec
                        keyState='contact'
                        title='Intervenant'
                        data={this.state.dataContact}
                        func={this.handleChangeDropDownSpec}
                        buttonValue='Ajout contact'
                        button={true}
                        funcButton={this.upModalContact}
                    />

                    {/* DESCRIPTION */}
                    <TextareaCustom
                        keyState='description'
                        value={description}
                        func={this.handleChangeInput}
                    />

                    <ButtonCustom
                        title='Sauvegarder'
                        type='submit'
                        style={{float: 'right'}}
                        onClick={this.handleSubmit}
                    />

                    </form>
                </div>

                <ToastContainer />
            </MenuAdmin>
        )
    }
}

export default VideoForm