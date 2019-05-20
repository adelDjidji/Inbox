import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  RequestThreads:[],
  loadThreads: ["list"],
  RequestMessages:["thread"],
  loadMessages: ["list"],
});

export const MailTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  feathing:false,
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
  console.log("redux list threads = ", list)
  return state.merge({ fetching: false, threads:list });
}

export const request_threads= (state) => state.merge({fetching:true})

export const load_messages =(state, {list})  =>{
  console.log("redux list threads = ", list)
  return state.merge({ fetching: false, messages:list });
}

export const request_messages= (state, {thread}) => state.merge({fetching:true})




export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_THREADS]: request_threads,
  [Types.LOAD_THREADS]: load_threads,
  [Types.REQUEST_MESSAGES]: request_messages,
  [Types.LOAD_MESSAGES]: load_messages,
 

});
