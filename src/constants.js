import { Dimensions, Platform } from 'react-native'

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

export const IS_IOS = Platform.OS === 'ios'

export const BASE_URL = __DEV__ ? 'https://later.cam' : 'https://later.cam'