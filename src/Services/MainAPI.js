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
  const request_messages= (thread)=> api.get('threads/'+thread) //link to load threads, get json result
  const send_thread= (thread)=> api.post('threads/', thread) //link to send thread
  const send_message= (thread, body)=> api.post('threads/'+thread, body) //link to send thread
  
  return {
    api,
    request_threads,
    request_messages,
    send_thread,
    send_message
  }
}

export default { create }