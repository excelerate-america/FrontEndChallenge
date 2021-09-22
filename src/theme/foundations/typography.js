const typography = {
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  lineHeights: {
    normal: 'normal',
    none: 1,
    equal: 1,
    short1: 1.29,
    short2: 1.33,
    base1: 1.44,
    base2: 1.5,
    tall1: 1.625,
    tall2: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem'
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  fonts: {
    heading: `"Sora", sans-serif`,
    body: `roboto, sans-serif`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    sm1: '0.6255rem', //'10px'
    sm2: '0.75rem', //'12px'
    sm3: '0.875rem', //'14px'
    md1: '1rem', //'16px'
    md2: '1.125rem', //'18px'
    md3: '1.25rem', // '20px'
    md4: '1.5rem', //'24px'
    md5: '1.75rem', //'28px'
    md6: '1.875rem', //'30px'
    lg1: '2rem', //'32px'
    lg2: '2.125rem', //'34px'
    lg3: '2.25rem', //'36px',
    lg4: '2.5rem', //'40px',
    lg5: '2.75rem', //'44px',
    lg6: '2.875rem', //'46px',
    xl1: '3rem', //'48px',
    xl2: '3.75rem', // '60px'
    xxl1: '4.5rem', //'72px'
    xxl2: '6rem', //'96px'
    xxl3: '8rem' //'128px'
  }
  // fontSizes: {
  //   sm1: '0.6255rem', //'10px'
  //   sm2: '0.75rem', //'12px'
  //   sm3: '0.875rem', //'14px'
  //   sm4: '1rem', //'16px'
  //   md1: '1.125rem', //'18px'
  //   md2: '1.25rem', // '20px'
  //   md3: '1.5rem', //'24px'
  //   md4: '1.75rem', //'28px'
  //   lg1: '1.875rem', //'30px'
  //   lg2: '2rem', //'32px'
  //   lg3: '2.125rem', //'34px'
  //   lg4: '2.25rem', //'36px',
  //   xl1: '2.5rem', //'40px',
  //   xl2: '2.75rem', //'44px',
  //   xl3: '2.875rem', //'46px',
  //   xl4: '3rem', //'48px',
  //   xxl1: '3.75rem', // '60px'
  //   xxl2: '4.5rem', //'72px'
  //   xxl3: '6rem', //'96px'
  //   xxl4: '8rem' //'128px'
  // },
  // fontSizes: {
  //   xxs: '0.75rem',
  //   xs: '0.813rem',
  //   sm: '0.875rem',
  //   md: '1rem',
  //   lg: '1.125rem',
  //   xl: '1.25rem',
  //   '2xl': '1.5rem',
  //   '3xl': '1.875rem',
  //   '4xl': '2.25rem',
  //   '5xl': '3rem',
  //   '6xl': '3.75rem',
  //   '7xl': '4.5rem',
  //   '8xl': '6rem',
  //   '9xl': '8rem'
  // }
}

/**
 * @deprecated
 * You can derive the Typography type from the DefaultChakraTheme
 *
 * type Typography = Pick<
 *   DefaultChakraTheme,
 *   | "letterSpacings"
 *   | "lineHeights"
 *   | "fontWeights"
 *   | "fonts"
 *   | "fontSizes"
 *  >
 */
//   export type Typography = typeof typography

export default typography
