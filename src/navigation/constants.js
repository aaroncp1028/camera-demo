import { IS_IOS } from '@root/constants'

export const NAV_HEADER_OPTION = {
  headerShown: false,
  headerStatusBarHeight: IS_IOS ? undefined : 0,
  headerStyle: { height: 0, overFlow: 'hidden' },
}