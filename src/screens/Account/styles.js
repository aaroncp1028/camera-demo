import { StyleSheet } from 'react-native'
import {
  SIDE_WIDTH,
  MID_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@themes/dimension';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#4645c3',
    height: SCREEN_WIDTH,
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  title: {
    fontSize: 28,
  },
  txt: {
    color: 'white',
    alignSelf: 'center'
  },
  camImage: {
    padding: 10,
    resizeMode: 'stretch',
    width: '90%',
    height: 200
  },
  giveText:{
    marginTop: 30,
    color: 'white',
    alignSelf: 'flex-start',
    paddingLeft: '5%'
  },
  input:{
    paddingLeft: 10,
    marginTop: 20,
    backgroundColor: 'white',
    height: 50,
    width: "90%"
  },
  inputRow:{
    marginTop: 20,
    marginVertical: 5,
    flexDirection: 'column',
    alignItems:'center',
    width: "100%"
  },
  rowText:{
    width: "90%",
    color: '#222',
    textAlign:'left',
    paddingRight: 10,
    color: "white"
  },
  rowInput:{
    marginTop: 10,
    padding: 5,
    width: "90%",
    height: 40,
    paddingVertical: 3,
    backgroundColor: 'white'
  },
})

export default styles