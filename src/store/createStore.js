import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

const composerEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (rootReducer) => {
  const middleware = []
  const enhancers = []

  middleware.push(thunkMiddleware)

  enhancers.push(composerEnhanced(applyMiddleware(...middleware)))

  const store = createStore(rootReducer, compose(...enhancers))

  return { store }
}
