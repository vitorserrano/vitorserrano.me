import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
    overflow: 'visible',
    scrollBehavior: 'smooth',
    zIndex: 1,
  },
})
