import { Dimensions, Platform } from 'react-native'

export const SCREEN_HEIGHT = Math.min(Dimensions.get('window').height, Dimensions.get('window').width)
export const SCREEN_WIDTH = Math.max(Dimensions.get('window').height, Dimensions.get('window').width)

export const IS_TABLET = SCREEN_HEIGHT > 750
export const IS_IOS = Platform.OS === 'ios'

export const OFFSET = IS_TABLET ? 180 : 90
export const SIDE_WIDTH = IS_TABLET ? 300 : 200
export const LEFT_WIDTH = IS_TABLET ? 350 : 225
export const MID_WIDTH = IS_TABLET? SCREEN_WIDTH - 2 * SIDE_WIDTH + 50 : SCREEN_WIDTH - 2 * SIDE_WIDTH + 25
export const VIEW_FINDER_WIDTH = IS_TABLET? 300 : 150
export const BUTTON_SIZE = IS_TABLET? 100 : 50
export const PORT_SCREEN_HEIGHT = SCREEN_WIDTH
export const PORT_SCREEN_WIDTH = SCREEN_HEIGHT
export const SERVER_ENDPOINT = __DEV__ ? 'http://test.mysite.am' : 'http://test.mysite.am'