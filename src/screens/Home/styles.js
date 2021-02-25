import { StyleSheet } from 'react-native'
import {
  SIDE_WIDTH,
  MID_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  VIEW_FINDER_WIDTH,
  LEFT_WIDTH,
  BUTTON_SIZE,
  OFFSET,
  IS_TABLET
} from '@themes/dimension';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
  },
  boxStyle: {
      width: VIEW_FINDER_WIDTH,
      height: VIEW_FINDER_WIDTH*0.75,
      position: 'relative',
      flexDirection: 'row',
  },
  preview:{
    backgroundColor: 'red',
    zIndex: 2,
    position: 'absolute',
    width:"100%",
    height: '100%'
  },
  switchBtn:{
    width: BUTTON_SIZE, 
    height:BUTTON_SIZE,
    backgroundColor:'blue'
  },
  viewFinder:{
    borderWidth:2,
    width: VIEW_FINDER_WIDTH/1.95,
    height: VIEW_FINDER_WIDTH/1.95*0.75,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    left: '27%',
    top: '20%'
  },
  viewFinderBackground:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1
  },
  counter:{
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    left: LEFT_WIDTH - OFFSET,
    top: SCREEN_HEIGHT * 0.15
  },
  counterImg: {
    resizeMode: 'center',
    width: "100%",
    height: '100%',
  },
  counterText: {
    color: 'white',
    fontSize: 18,
  },
  photo:{
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    left: LEFT_WIDTH-OFFSET-20,
    top: SCREEN_HEIGHT * 0.5 - 25
  },
  photoImage:{
    resizeMode: 'center',
    width: "100%",
    height: '100%',
  },
  flash:{
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    left: LEFT_WIDTH + MID_WIDTH,
    bottom: SCREEN_HEIGHT * 0.5
  },
  flashImage:{
    resizeMode: 'center',
    width: '100%',
    height: '100%'
  },
  settingsImage:{
    resizeMode: 'center',
    width: '100%',
    height: '100%'
  },
  settings:{
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    left: LEFT_WIDTH + MID_WIDTH,
    top: SCREEN_HEIGHT * 0.75
  },
  winderImage:{
    resizeMode: 'center',
    width: '100%',
    height: '100%'
  },
  winder:{
    position: 'absolute',
    width: IS_TABLET? SCREEN_WIDTH/3/5*3 - 80: SCREEN_WIDTH/3/5*3,
    height: BUTTON_SIZE,
    right: LEFT_WIDTH /4,
    top: IS_TABLET?50:0,
  }
})

export default styles
