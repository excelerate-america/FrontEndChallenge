import { mode, transparentize } from '@chakra-ui/theme-tools'

const button = {
  // style object for base or default style
  baseStyle: {
    margin: '0px',
    fontWeight: 500,
    borderRadius: '4px',
    _focus: {
      boxShadow: 'outline'
    },
    _disabled: {
      color: 'gray.250',
      border: `2px solid`,
      borderColor: `gray.250`,
      cursor: 'not-allowed',
      boxShadow: 'none'
    },
    _hover: {
      _disabled: {
        bg: 'initial'
      }
    }
  },
  sizes: {
    lg: {
      h: 12,
      minW: 12,
      fontSize: 'lg1',
      px: 6
    },
    md: {
      h: 9,
      minW: 25,
      fontSize: 'sm4',
      px: 6
    },
    sm: {
      h: 8,
      minW: 8,
      fontSize: 'sm3',
      px: 3
    }
  },
  variants: {
    outline: (props) => ({
      bg: 'white',
      color: 'brand.primary',
      border: `2px solid`,
      borderColor: `brand.primary`,
      fontWeight: 'medium',
      textDecoration: 'none',
      _hover: {
        bg: 'yellow.500',
        color: 'brand.800',
        borderColor: 'brand.800',
        textDecoration: 'none'
      },
      _active: {
        color: 'brand.400',
        borderColor: `brand.400`
      },
      _disabled: {
        color: 'gray.250',
        border: `2px solid`,
        borderColor: 'gray.250'
      }
    }),
    primary: (props) => ({
      fontWeight: 'medium',
      color: 'white',
      bg: 'brand.primary',
      border: `2px solid`,
      borderRadius: 1,
      borderColor: `brand.primary`,
      _hover: {
        bg: 'brand.800',
        border: `2px solid`,
        borderColor: `brand.800`,
        textDecoration: 'none'
      },
      _active: {
        bg: 'brand.400',
        border: `2px solid`,
        borderColor: 'brand.400'
      },
      _disabled: {
        bg: 'gray.250',
        color: 'gray.300',
        border: `2px solid`,
        borderColor: 'gray.250'
      }
    }),
    solid: (props) => ({
      fontWeight: 'medium',
      color: 'white',
      bg: 'brand.primary',
      border: `2px solid`,
      borderColor: `brand.primary`,
      _hover: {
        bg: 'brand.800',
        border: `2px solid`,
        borderColor: `brand.800`,
        textDecoration: 'none'
      },
      _active: {
        bg: 'brand.400',
        border: `2px solid`,
        borderColor: 'brand.400'
      },
      _disabled: {
        bg: 'gray.250',
        color: 'gray.300',
        border: `2px solid`,
        borderColor: 'gray.250'
      }
    }),
    ghost: (props) => ({
      color: 'brand.primary',
      fontWeight: 'medium',
      textDecoration: 'none',
      _active: {
        borderColor: `brand.400`
      },
      _disabled: {
        color: 'gray.250',
        border: '0px'
      }
    }),
    link: (props) => ({
      color: 'black',
      fontWeight: 'medium',
      textDecoration: 'none',
      _hover: {
        textDecoration: 'none',
        borderColor: `brand.primary`
      },
      _active: {
        fontWeight: 'semibold'
      },
      _disabled: {
        color: 'gray.250',
        border: '0px'
      }
    })
    // 4. We can override existing variants
    // outline: (props) => ({
    //   bg: props.colorMode === 'dark' ? 'gray.300' : 'blue.400',
    //   color: props.colorMode === 'dark' ? 'blue.600' : 'white',
    // }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: 'outline'
  }
}
export default button
