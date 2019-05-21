import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { Button, notification } from 'antd';


const { Types, Creators } = createActions({
  RequestThreads:[],
  loadThreads: ["list"],
  RequestMessages:["threadID"],
  loadThread: ["thread"],
  sendThread:["thread"],
  sendThreadSuccess:[],
  sendMessage:["thread_id", "data"],
  sendMessageSuccess:[]
});

export const MailTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  feathing:true,
  feathing2:true,
  threadOBJ:{},
  messages:[],
  threadSent:false,
  threads:[{
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "subject" : "Meeting Today!",
    "time" : "2015-07-20T15:49:04-07:00",
    "read" : true,
    "deleted" : true,
    "creator" : {
      "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
      "email" : "example@dzconseil.com",
      "username" : "administrator"
    },
    "messages" : [ {
      "id" : "d290f1ee-6c52-4b02-90e6-d701748f9854",
      "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien facilisis, semper nunc a, pellentesque ex. Ut convallis odio vestibulum dui posuere commodo.",
      "time" : "2015-07-20T15:49:04-07:00",
      "creator" : {
        "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
        "email" : "example@dzconseil.com",
        "username" : "administrator"
      }
    } ]
  },
  {
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "subject" : "Meeting Today!",
    "time" : "2015-07-20T15:49:04-07:00",
    "read" : true,
    "deleted" : true,
    "creator" : {
      "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
      "email" : "example@dzconseil.com",
      "username" : "administrator"
    },
    "messages" : [ {
      "id" : "d290f1ee-6c52-4b02-90e6-d701748f9854",
      "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien facilisis, semper nunc a, pellentesque ex. Ut convallis odio vestibulum dui posuere commodo.",
      "time" : "2015-07-20T15:49:04-07:00",
      "creator" : {
        "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
        "email" : "example@dzconseil.com",
        "username" : "administrator"
      }
    } ]
  },
  {
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "subject" : "Meeting Today!",
    "time" : "2015-07-20T15:49:04-07:00",
    "read" : true,
    "deleted" : true,
    "creator" : {
      "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
      "email" : "example@dzconseil.com",
      "username" : "administrator"
    },
    "messages" : [ {
      "id" : "d290f1ee-6c52-4b02-90e6-d701748f9854",
      "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien facilisis, semper nunc a, pellentesque ex. Ut convallis odio vestibulum dui posuere commodo.",
      "time" : "2015-07-20T15:49:04-07:00",
      "creator" : {
        "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
        "email" : "example@dzconseil.com",
        "username" : "administrator"
      }
    } ]
  }],
});

export const load_threads =(state, {list})  =>{
  // console.log("redux list threads = ", list)
  return state.merge({ fetching: false, threads:list });
}

export const request_threads= (state) => state.merge({fetching:true})


//getting thread details+messages
export const request_messages= (state, {threadID}) => {
  console.log("REDUX :D", threadID)
  return state.merge({feathing2:true})
}
export const load_thread =(state, {thread})  =>{ //thread infos ready !
  console.log("-----redux list Messages = ", thread)
  return state.merge({ feathing2: false, threadOBJ:thread });
}


//send thread data
export const send_thread =(state, {thread})  =>{
  console.log("-----redux thread to send = ", thread)
  return state.merge({ threadSent: false });
}
export const send_thread_success =(state)  =>{
  notification['success']({
    message: 'Success',
    description:
      'Thread sent with success.',
  })
  setInterval(function(){ document.location.href='/' }, 1000); // redirect after insertion success
  return state.merge({ threadSent: true });
}


export const send_message =(state, {thread_id, data})  =>{
  return state; //do nithing here on redux, the work is on saga
}
export const send_message_success =(state)  =>{
  notification['success']({
    message: 'Success',
    description:
      'Message sent with success.',
  });
  return state; // just show notification do nothing else
}



export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_THREADS]: request_threads,
  [Types.LOAD_THREADS]: load_threads,
  [Types.REQUEST_MESSAGES]: request_messages,
  [Types.LOAD_THREAD]: load_thread,
  [Types.SEND_THREAD]: send_thread,
  [Types.SEND_THREAD_SUCCESS]: send_thread_success,
  [Types.SEND_MESSAGE]: send_message,
  [Types.SEND_MESSAGE_SUCCESS]: send_message_success,
 

});
