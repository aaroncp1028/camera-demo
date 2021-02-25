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
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#93a0e5',
    width: PORT_SCREEN_WIDTH,
    height: PORT_SCREEN_HEIGHT,
    flexDirection: 'column',
    
  },
  box: {
    padding : 10,
    paddingTop: 50,
    alignItems: 'center',
    top: IS_TABLET?100:50,
    width: '90%',
    maxWidth: 500,
    backgroundColor: '#d8d8d8',
    flexDirection:'column',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#222'
  },
  inputBox: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '98%',
    borderWidth: 1,
    borderColor: '#333',
    padding: 10

  },
  inputRow:{
    marginVertical: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems:'center',
  },
  rowText:{
      color: '#222',
    flex : 2,
    textAlign:'right',
    paddingRight: 10
  },
  rowInput:{
    flex: 5,
    borderWidth : 1,
    paddingVertical: 3,
  },
  question:{
      textDecorationLine: 'underline'
  },
  title: {
    fontSize: 25,
    marginTop: 20,
  },
  btnSignup:{
      borderWidth: 1,
      width: 100,
      paddingLeft: 20,
      borderRadius: 2
  },
  logo:{
      width : 100,
      height: 100,
      resizeMode: 'contain'
  },
  hidden:{
        flex: 5,
        paddingVertical: 3,
        width: 0,
        borderWidth: 1,
        borderColor: 'white'
  }
});

export default styles;
