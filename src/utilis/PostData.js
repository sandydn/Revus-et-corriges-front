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
    idvideo = idvideo.filter(e => e && e !== '')

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
    const token = localStorage.getItem("token")
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event'
        }
    axios.post(pathApi, body,
        {headers: {
            'x-access-token': `${token}`
            }
        })
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
    const {
        titre,
        importance,
        dateStart,
        description,
        adresse,
        category,
        cover,
        link,
        video,
        allDataVideo,
        contact,
        allDataContact,
        genre
    } = objState

    let idvideo = video.split(/,\s|,/)
    idvideo = idvideo.filter(e => e && e !== '')

    idvideo = idvideo.map(e => {
        const ret = allDataVideo.find(elem => {
            return elem.titre === e
        })
        return ret && ret.idvideo
    })

    let idcontact = contact.split(/,\s|,/)
    idcontact = idcontact.filter(e => e && e !== '')

    idcontact = idcontact.map(e => {
        const ret = allDataContact.find(elem => {
            return elem.nom === e
        })
        return ret && ret.idcontact
    })

    const body = {
        titre,
        importance,
        description,
        dateStart: moment(dateStart).format('YYYY-MM-DD'),
        cover,
        link,
        adresse: adresse.join('/'),
        category,
        idvideo,
        idcontact,
        genre
    }
    const token = localStorage.getItem("token")
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event-cinema'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event-cinema'
    }
    axios.post(pathApi, body,
        {headers: {
            'x-access-token': `${token}`
            }
        })
        .then(console.log)
        .catch(console.log)
        console.log(objState,body)
}

// ------------------------------------------------------ VIDEO (DVD/coffret)
export const PostDataVideo = (objState) => {
    const {
        titre,
        importance,
        dateStart,
        description,
        adresse,
        category,
        cover,
        link,
        video,
        allDataVideo,
        contact,
        allDataContact,
        genre
    } = objState

    let idvideo = video.split(/,\s|,/)
    idvideo = idvideo.filter(e => e && e !== '')

    idvideo = idvideo.map(e => {
        const ret = allDataVideo.find(elem => {
            return elem.titre === e
        })
        return ret && ret.idvideo
    })

    let idcontact = contact.split(/,\s|,/)
    idcontact = idcontact.filter(e => e && e !== '')

    idcontact = idcontact.map(e => {
        const ret = allDataContact.find(elem => {
            return elem.nom === e
        })
        return ret && ret.idcontact
    })

    const body = {
        titre,
        importance,
        description,
        dateStart: moment(dateStart).format('YYYY-MM-DD'),
        cover,
        link,
        adresse: adresse.join('/'),
        category,
        idvideo,
        idcontact,
        genre
    }
    const token = localStorage.getItem("token")
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a5/event-cinema'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a5/event-cinema'
    }
    axios.post(pathApi, body,
        {headers: {
            'x-access-token': `${token}`
            }
        })
        .then(console.log)
        .catch(console.log)
}

// ------------------------------------------------------ CONTACT (editeur, realisateur, distributeur, acteur)

/**
 * @param {String}      prenom
 * @param {String}      nom
 * @param {Number}      genre
 */
export const PostDataContact = (objState) => {
    
    
    const {
        nom,
        prenom,
        genre
    } = objState

    const body = {
        nom,
        prenom,
        genre
    }
    const token = localStorage.getItem("token")
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a2/contact'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a2/contact'
    }
    axios.post(pathApi, body,
        {headers: {
        'x-access-token': `${token}`
          }
        })
        .then(console.log(('bonjour je suis posdatacontact')))
        .catch(console.log)
}
// ------------------------------------------------------ DB FILM
/**
 * @param {String}    titre
 * @param {Date}      dateCreation
 * @param {ArrayOfId} video
 * @param {ArrayOfId} contact
 */
export const PostDataMovie = (objState) => {
    const {
        titre,
        dateCreation,
        contact,
        allDataContact,
    } = objState

    let idcontact = contact.split(/,\s|,/)
    idcontact = idcontact.filter(e => e && e !== '')

    idcontact = idcontact.map(e => {
        const ret = allDataContact.find(elem => {
            return elem.nom === e
        })
        return ret && ret.idcontact
    })

    const body = {
        titre,
        dateCreation: moment(dateCreation).format('YYYY'),
        idcontact,
    }
    const token = localStorage.getItem("token")
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/a7/video'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/a7/video'
    }
    axios.post(pathApi, body,
        {headers: {
            'x-access-token': `${token}`
            }
        })
        .then(console.log)
        .catch(console.log)
}