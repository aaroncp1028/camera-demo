import { Axios } from '@root/utils'
import { BASE_URL } from '@root/constants'
import * as actionTypes from '../actionTypes'

const handleException = (dispatch, error, event) => {
  let errorData
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
    errorData = error.response
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
    errorData = error.request
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
    errorData = error.message
  }
  console.log(error.config)
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
    const url = `${BASE_URL}/api/register?name=${data.name}&email=${data.email}&password=${data.password}`
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
          console.log('==========Failed to getting history result from cloud===============')
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
        handleException(dispatch, e, 'REGISTER_FAILED')
      })
  }
}

export function login(data) {
    return (dispatch) => {
      const url = `${BASE_URL}/api/login?email=${data.email}&password=${data.password}`
      Axios.post(url)
        .then((resp) => {
          if (resp.status === 200) {
            dispatch({
              type: actionTypes.SET_TOKEN,
              payload: resp.data.token
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
