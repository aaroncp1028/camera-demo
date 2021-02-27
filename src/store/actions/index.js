import { Axios } from '@root/utils'
import { BASE_URL } from '@root/constants'
import * as actionTypes from '../actionTypes'


const handleException = (dispatch, error, event) => {
  let errorData
  if (error.response) {
    errorData = error.response
  } else if (error.request) {
    errorData = error.request
  } else {
    errorData = error.message
  }
  console.log("================error======data===========", errorData)
  if([401, 403].indexOf(errorData.status) > -1)
    dispatch({
      type: actionTypes.SET_TOKEN,
      payload: 'NULL',
  })
  if(errorData.data){
    dispatch({
      type: actionTypes.SET_ERROR,
      payload: {
        type: event,
        data: errorData.data.errors,
      },
    })
  }else
  dispatch({
    type: actionTypes.SET_ERROR,
    payload: {
      type: event,
      data: errorData,
    },
  })
}

export function register(data) {
  return (dispatch) => {
    const url = `/api/register?name=${data.name}&email=${data.email}&password=${data.password}`
    console.log("==========sending request=========", url)
    Axios.post(url)
      .then((resp) => {
        if (resp.status === 200) {
          console.log(
            '==========success getting history result from cloud===============',
            resp.data.data
          )
          dispatch({
            type: actionTypes.SET_TOKEN,
            payload: resp.data.data,
          })
        } else {
          dispatch({
            type: actionTypes.SET_ERROR,
            payload: {
              type: 'REGISTER_FAILED',
              data: 'Failed to getting test result from cloud',
            },
          })
        }
      })
      .catch((e) => {
        console.log("===========catched you================")
        handleException(dispatch, e, 'REGISTER_FAILED')
      })
  }
}

export function login(data) {
    return (dispatch) => {
      const url = `/api/login?email=${data.email}&password=${data.password}`
      Axios.post(url)
        .then((resp) => {
          if (resp.status === 200) {
            dispatch({
              type: actionTypes.SET_TOKEN,
              payload: resp.data.token
            })
            dispatch({
              type: actionTypes.SET_IS_NEW,
              payload: 1
            })
            
          } else {
            dispatch({
              type: actionTypes.SET_ERROR,
              payload: {
                type: 'LOGIN_FAILED',
                data: 'Failed to getting test result from cloud',
              },
            })
          }
        })
        .catch((e) => {
          handleException(dispatch, e, 'LOGIN_FAILED')
        })
    }
  }

  export function logout(){
    return (dispatch) => {
      const url = `/api/logout`
      Axios.post(url)
        .then((resp) => {
          if (resp.status === 200) {
            dispatch({
              type: actionTypes.SET_TOKEN,
              payload: "NULL"
            })
          } else {
            dispatch({
              type: actionTypes.SET_ERROR,
              payload: {
                type: 'LOGOUT_FAILED',
                data: 'Failed to getting test result from cloud',
              },
            })
          }
        })
        .catch((e) => {
          handleException(dispatch, e, 'LOGOUT')
        })
    }
  }

  export function getAvaiableCamera(){
    return (dispatch) => {
      const url = `/api/cameras/available`
      Axios.post(url)
        .then((resp) => {
          if (resp.status === 200) {
            console.log("======cameras available==",resp.data)
            dispatch({
              type: actionTypes.SET_CAMERAS,
              payload: resp.data
            })
          } else {
            dispatch({
              type: actionTypes.SET_ERROR,
              payload: {
                type: 'GET_CAMERAS',
                data: 'Failed Getting Cameras',
              },
            })
          }
        })
        .catch((e) => {
          console.log("==========catched===========")
          handleException(dispatch, e, 'GET_CAMERAS')
        })
    }
  }
