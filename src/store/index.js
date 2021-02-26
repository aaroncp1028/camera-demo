import rootReducer from '@store/reducers'

import configureStore from './createStore'

// import { reducer as AuthReducer } from './Auth/Reducers'

export default () => {
  return configureStore(rootReducer)
}