import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
// import { createBreakpoints } from '@chakra-ui/theme-tools'
import components from './components'
import foundations from './foundations'
// import { colors } from './colors'
// Global style overrides
import { globalStyles, layerStyles, textStyles } from './styles'
// const breakpoints = createBreakpoints({
//   sm: '24rem',
//   md: '48rem',
//   lg: '60rem'
// })
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}
const theme = extendTheme({
  ...foundations,
  sizes: {
    7.5: '1.875rem'
  },
  components,
  styles: globalStyles,
  layerStyles,
  textStyles,
  config
})
export default theme
