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
export const UpdateEvent = (id, objState) => {
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
  let pathApi = process.env.REACT_APP_PATH_API_DEV + `a5/event/${id}/`
  if (process.env.NODE_ENV === 'production') {
    pathApi = process.env.REACT_APP_PATH_API_PROD + `a5/event/${id}/`
  }
  axios.put(pathApi, body)
    .then(console.log)
    .catch(console.log)
}