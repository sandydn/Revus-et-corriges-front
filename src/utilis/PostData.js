import axios from 'axios'
import moment from "moment"

// ------------------------------------------------------ EVENT GENERAL
/**
 * @param {String}    titre 
 * @param {Number}    importance
 * @param {String}    description
 * @param {Date}      dateStart
 * @param {Date}      dateEnd
 * @param {String}    adresse 
 * @param {Number}    category
 * @param {String}    cover
 * @param {String}    link
 * @param {ArrayOfId} idvideo
 */
export const PostDataEvent = (objState) => {
    const {
        titre,
        importance, 
        description, 
        dateStart, 
        dateEnd, 
        adresse, 
        category, 
        cover, 
        link, 
        video,
        allDataVideo
    } = objState

    let idvideo = video.split(/,\s|,/)
    idvideo = idvideo.filter(e => e && e != '')

    idvideo = idvideo.map(e => {
        const ret = allDataVideo.find(elem => {
            return elem.titre === e
        })
        return ret && ret.idvideo
    })
    const body = {
        titre,
        importance, 
        description, 
        dateStart: moment(dateStart).format('YYYY-MM-DD'), 
        dateEnd: moment(dateEnd).format('YYYY-MM-DD'), 
        adresse: adresse.join('/'), 
        category, 
        cover, 
        link,
        idvideo    
    }
    axios.post('http://localhost:4000/a5/event', body)
         .then(console.log)
         .catch(console.log)
}

// ------------------------------------------------------ CINEMA (Projection)
/**
 * @param {String}    titre
 * @param {Number}    importance
 * @param {Date}      dateStart
 * @param {String}    adresse
 * @param {ArrayOfId} idvideo
 * @param {String}    description
 * @param {ArrayOfId} idcontact
 * @param {String}    link
 * @param {String}    cover
 * @param {Number}    genre
 */
export const PostDataCinema = (objState) => {
    console.log(objState)
}

// ------------------------------------------------------ VIDEO (DVD/coffret)
export const PostDataVideo = (objState) => {
    console.log(objState)
}

// ------------------------------------------------------ CONTACT (editeur, realisateur, distributeur, acteur)
export const PostDataContact = (objState) => {
    console.log(objState)
}

// ------------------------------------------------------ DB FILM
export const PostDataMovie = (objState) => {
    console.log(objState)
}