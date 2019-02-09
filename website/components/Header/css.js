import colors from '../colors';

const phi = (1 + Math.sqrt(5)) / 2;
const shared = {
  textAlign: 'center',
  color: colors.primaryDark,
  margin: '0.25em 0',
};

export const h1 = {
  fontSize: `${phi ** 3}em`,
  ...shared,
};

export const h2 = {
  fontSize: `${phi ** 2}em`,
  ...shared,
};

export const h3 = {
  fontSize: `${phi ** 1}em`,
  ...shared,
};

export const h4 = {
  fontSize: '1em',
  ...shared,
};

export const h5 = {
  fontSize: '1em',
  ...shared,
};

export default {
  h1, h2, h3, h4, h5,
};
