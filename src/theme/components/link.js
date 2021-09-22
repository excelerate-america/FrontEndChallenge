const link = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'normal',
    lineHeight: 'base1',
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: {
      textDecoration: 'none'
    },
    _focus: {
      boxShadow: 'outline'
    }
  },
  sizes: {
    sm: {
      px: 3,
      fontSize: 'sm3'
    },
    md: {
      px: 4,
      fontSize: 'md1'
    }
  },
  variants: {
    navbtn: (props) => ({
      bg: 'white',
      color: 'black',
      textTransform: 'uppercase',
      textDecoration: 'none',
      _hover: {
        color: 'brand.800',
        textDecoration: 'none'
      },
      _active: {
        color: 'brand.800'
      },
      _disabled: {
        color: 'gray.250'
      }
    }),
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
    })
    // 4. We can override existing variants
    // outline: (props) => ({
    //   bg: props.colorMode === 'dark' ? 'gray.300' : 'blue.400',
    //   color: props.colorMode === 'dark' ? 'blue.600' : 'white',
    // }),
  },
  defaultProps: {
    size: 'sm',
    variant: 'navbtn'
  }
}
export default link
