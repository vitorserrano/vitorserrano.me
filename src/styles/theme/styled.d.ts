import 'styled-components'

import { colors } from './colors'
import { fonts } from './fonts'

import { fontSizes, devices } from './breakpoints'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    fonts: typeof fonts
    breakpoints: {
      fontSizes: typeof fontSizes
      devices: typeof devices
    }
  }
}
