import axios from 'axios';

export const GetData = (url) => {
  
  return axios.get(url)
        .then( res => res)
        .catch(err => console.log(err))
}



