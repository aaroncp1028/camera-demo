import * as actionTypes from '@root/store/actionTypes'
import produce from 'immer'

const initialState = {
  error: null,
  token: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN: {
      return produce(state, (draft) => {
        draft.token = action.payload
      })
    }
    case actionTypes.SET_ERROR: {
      return produce(state, (draft) => {
        draft.error = action.payload
      })
    }
    
    default: {
      return state
    }
  }
}

export default authReducer
