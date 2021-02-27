import * as actionTypes from '@root/store/actionTypes'
import produce from 'immer'

const initialState = {
  cameras: []
}

const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CAMERAS: {
      return produce(state, (draft) => {
        draft.cameras = action.payload
      })
    }
    default: {
      return state
    }
  }
}

export default cameraReducer
