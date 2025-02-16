import { all, takeLatest } from 'redux-saga/effects'

import FixtureAPI from '../Services/FixtureAPI'
import MainAPI from '../Services/MainAPI'
import {useFixtures} from '../config/AppConfig'

/* ------------- Types from redux------------- */
import { MailTypes } from '../Redux/MailRedux'


/* ------------- Sagas functions ------------- */

import { load_threads, load_messages, send_thread, send_message } from './MailSagas'


/* ------------- API ------------- */
const mainAPI= useFixtures ? FixtureAPI : MainAPI.create()


/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([

    takeLatest(MailTypes.REQUEST_THREADS, load_threads, mainAPI),
    takeLatest(MailTypes.REQUEST_MESSAGES, load_messages, mainAPI),
    takeLatest(MailTypes.SEND_THREAD, send_thread, mainAPI),
    takeLatest(MailTypes.SEND_MESSAGE, send_message, mainAPI),
   
  ])
}