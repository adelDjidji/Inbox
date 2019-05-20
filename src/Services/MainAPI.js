import apisauce from 'apisauce'
import { API_URL } from '../config/AppConfig'

const create = (baseURL = API_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    },
    timeout: 10000
  })

  const request_threads= ()=> api.get('threads') //link to load threads, get json result
  
  return {
    api,
    request_threads,
    
  }
}

export default { create }