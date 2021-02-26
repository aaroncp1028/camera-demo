import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux'


const ToastMessage = () => {
    const error = useSelector((state) => state.auth.error)
    const dispatch = useDispatch();
    useEffect(() => {
        if(error){
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error.type,
                visibilityTime: 4000,
                autoHide: true,
                onShow: ()=>{
                    console.log('=========Error showed======')
                }
            });
            setTimeout(()=>{
                dispatch({
                    type: "SET_ERROR",
                    payload: null
                })
            },4000)
        }
            
    }, [error]);

  return (
    <>
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  )
}

ToastMessage.propTypes = {
}
ToastMessage.defaultProps = {}

export default ToastMessage
