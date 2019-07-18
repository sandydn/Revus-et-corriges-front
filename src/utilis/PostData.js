import axios from 'axios'
import moment from "moment"

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
export const PostDataEvent = (obj) => {
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
  } = obj

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
  console.log(body);
  axios.post('http://localhost:4000/a5/event', body)
}

