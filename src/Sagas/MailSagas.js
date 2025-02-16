import { call, put } from "redux-saga/effects";
import MailActions from "../Redux/MailRedux";




export function* load_threads(api){
  const res = yield call(api.request_threads)
  if(!res.data) res.data=[]
  yield put(MailActions.loadThreads(res.data));
}

export function* load_messages(api, {thread}){
  const res = yield call(api.request_messages, thread)
  yield put(MailActions.loadThread(res.data));
}


export function* send_thread(api, {thread}){
  const res = yield call(api.send_thread, thread)
  yield put(MailActions.sendThreadSuccess());
}

export function* send_message(api, {thread_id, data}){
  const res = yield call(api.send_message, thread_id, data)
  yield put(MailActions.sendMessageSuccess());
}

