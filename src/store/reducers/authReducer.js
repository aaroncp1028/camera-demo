import * as actionTypes from '@root/store/actionTypes'
import produce from 'immer'
import { Axios } from '@root/utils'

const initialState = {
  error: null,
  token: null,
  isNew: 0
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
    case actionTypes.SET_IS_NEW:{
      return produce(state, (draft) => {
        draft.isNew = action.payload
      })
    }
    default: {
      return state
    }
  }
}

export default authReducer
