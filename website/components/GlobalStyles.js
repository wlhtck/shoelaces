import { createGlobalStyle } from 'styled-components';
import colors from '../../common/colors';

const globalStyles = {
  'html, body': {
    height: '100%',
    width: '100%',
  },
  body: {
    fontFamily: '"Roboto", sans-serif',
  },
  '#app': {
    color: colors.primary,
    background: 'white',
    minHeight: '100%',
    minWidth: '100%',
  },
};


const GlobalStyles = createGlobalStyle`${globalStyles}`;

export default GlobalStyles;
