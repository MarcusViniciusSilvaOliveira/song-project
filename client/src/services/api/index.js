import axios from "axios"
import { DEFAULT_API_URL } from '../../helpers/constants'

export const Get = (source) => {
   return axios.get(DEFAULT_API_URL + '/api' + source)
      .then((response) => response);
   }

export const Post = (source, body, configs = {}) => {
   return axios.post(DEFAULT_API_URL + '/api' + source, body, configs)
      .then((response) => response);
   }