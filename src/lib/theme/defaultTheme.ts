import breakPoints from './breakPoints';

const defaultTheme = {
  colors: {
    primary: '#333333',
    secondary: '#ffffff',
    white: '#ffffff',
  },
  breakPoints: breakPoints,
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;
