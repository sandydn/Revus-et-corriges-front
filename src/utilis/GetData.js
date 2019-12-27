import axios from 'axios';

export const GetData = (url) => {

  let pathApi = process.env.REACT_APP_PATH_API_DEV + `${url}`
  if (process.env.NODE_ENV === 'production') {
    pathApi = process.env.REACT_APP_PATH_API_PROD + `${url}`
  }
  return axios.get(pathApi)
        .then( res => res)
        .catch(err => console.log(err))
}



