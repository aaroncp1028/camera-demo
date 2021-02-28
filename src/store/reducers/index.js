import { combineReducers } from 'redux'
import authReducer from './authReducer'
import cameraReducer from './cameraReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  camera: cameraReducer
})

export default rootReducer