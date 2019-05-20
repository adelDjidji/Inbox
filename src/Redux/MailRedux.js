import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  RequestThreads:[],
  loadThreads: ["list"],
  
});

export const MailTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  feathing:false,
  threads:[],
});

export const load_threads =(state, {list})  =>{
  console.log("redux list threads = ", list)
  return state.merge({ fetching: false, threads:list });
}

export const request_threads= (state) => state.merge({fetching:true})




export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_THREADS]: request_threads,
  [Types.LOAD_THREADS]: load_threads,
 

});
