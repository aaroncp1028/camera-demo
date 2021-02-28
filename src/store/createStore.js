import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const composerEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (rootReducer) => {
  const middleware = []
  const enhancers = []
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
  };
  middleware.push(thunkMiddleware)

  enhancers.push(composerEnhanced(applyMiddleware(...middleware)))
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  
  let persistor = persistStore(store)
  return { store, persistor }
}
