import { combineReducers } from 'redux';
import createStore from './CreateStore';
import rootSaga from '../Sagas/index';


const reducers = combineReducers({
   mail: require('./MailRedux').reducer,  
 
});


export default () => {
  let { store , sagasManager, sagaMiddleware  } = createStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
