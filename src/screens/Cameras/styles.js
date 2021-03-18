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
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
  },
})

export default styles