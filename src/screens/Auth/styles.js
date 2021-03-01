import {StyleSheet} from 'react-native';
import {
  SIDE_WIDTH,
  MID_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  PORT_SCREEN_WIDTH,
  PORT_SCREEN_HEIGHT,
  IS_TABLET,
} from '@themes/dimension';
import { GREY } from '@root/themes/colors';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: PORT_SCREEN_WIDTH,
  },
  scroll:{
    marginTop: IS_TABLET?100:50,
    width: '96%',
    maxWidth: 500,
    maxHeight: PORT_SCREEN_HEIGHT - 100,
    backgroundColor: '#d8d8d8',
  },
  box: {
    padding : 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    flexDirection:'column',
    borderRadius: 2,
    borderColor: "black",
    borderWidth: 1
  },
  inputBox: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '98%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginTop: 20,

  },
  inputRow:{
    marginVertical: 5,
    flexDirection: 'column',
    alignItems:'center',
  },
  rowText:{
    width: "90%",
    color: '#222',
    textAlign:'left',
    paddingRight: 10,
  },
  rowInput:{
    marginTop: 10,
    width: "95%",
    borderWidth : 1,
    paddingVertical: 3,
  },
  question:{
      textDecorationLine: 'underline',
  },
  title: {
    fontSize: 25,
    marginTop: 5,
  },
  btnSignup:{
      borderWidth: 1,
      width: 120,
      borderRadius: 2,
      height: 40,
      alignItems: 'center',
      justifyContent: "center",
      alignSelf: 'flex-start',
      marginLeft: '2.5%'
  },
  logo:{
      width : 100,
      height: 100,
      resizeMode: 'contain'
  },
  errorText:{
    color: 'red',
    textAlign: 'left',
    width: "90%"
  }
});

export default styles;
