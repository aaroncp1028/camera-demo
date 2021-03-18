import { StyleSheet } from 'react-native'
import {
  SIDE_WIDTH,
  MID_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@themes/dimension';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4645c3',
    height: SCREEN_WIDTH,
    flexDirection: 'row',
  },
  title: {
    
  },
  upButton:{
    top: 0,
    left: 0,
    backgroundColor: "#FF0D9D",
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth:2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton:{
    
        top: 10,
        left: 10,
        backgroundColor: "#9D98E7",
        width: "100%",
        height: "100%",
        borderColor: "white",
        position: 'absolute'
    
  }
})

export default styles