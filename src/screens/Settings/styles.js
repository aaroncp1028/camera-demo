import { StyleSheet } from 'react-native'
import {
  SIDE_WIDTH,
  MID_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@themes/dimension';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
  },
})

export default styles