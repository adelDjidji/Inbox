import { call, put } from "redux-saga/effects";
import MailActions from "../Redux/MailRedux";




export function* load_threads(api){
  const res = yield call(api.request_threads)
  if(!res.data) res.data=[]
  yield put(MailActions.loadThreads(res.data));
}
export function* load_messages(api, {thread}){
  const res = yield call(api.request_messages, thread)
  if(!res.data) res.data=[]
  yield put(MailActions.loadMessages(res.data));
}
// export function* login(api, { email, password }) {
  
//   const body = {
//     username: email,
//     password: password,
//     client_id: "1",
//     grant_type: "password"
//   };

//   console.log("LOGIN saga 2",api)
//   const response = yield call(api.login, body);

//   if (response.data) {
//     console.log("SAGA:loginsuccess")
//             sessionStorage.setItem("sessionID", 200);
//             sessionStorage.setItem("sessionAccess", response.data.type);
//             sessionStorage.setItem("sessionCurrent", JSON.stringify(response.data));
//     yield put(UsersActions.authSuccess());
//   } else {
//     console.log("SAGA:loginFail")

//     yield put(UsersActions.authFailure("Email ou mot de passe incorrect!"));
//   }
// }
// export function* logout(api) {
//   yield call(api.removeAuthToken);
//   yield put(UsersActions.logoutSuccess());
// }
