import { DefaultTheme } from 'styled-components'

import { colors } from './colors'
import { fonts } from './fonts'

import { fontSizes, devices } from './breakpoints'

export const appTheme: DefaultTheme = {
  colors,
  fonts,
  breakpoints: {
    fontSizes,
    devices,
  },
}
