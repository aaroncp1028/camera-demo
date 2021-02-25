import { Dimensions, Platform } from 'react-native'

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

export const IS_IOS = Platform.OS === 'ios'

export const SERVER_ENDPOINT = __DEV__ ? 'http://test.mysite.am' : 'http://test.mysite.am'