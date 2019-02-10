import colors from '../colors';

const css = ({ color }) => ({
  padding: '1em',
  backgroundColor: colors[color || 'primary'],
  height: '100%',
});

export default css;
