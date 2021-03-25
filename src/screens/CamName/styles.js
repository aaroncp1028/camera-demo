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
  }
})

export default styles