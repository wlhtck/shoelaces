import query from './media.new';

const container = ({ fluid }) => {
  const props = fluid
    ? {
      width: '100%',
      paddingRight: 0,
      paddingLeft: 0,
      overflowX: 'hidden',
    }
    : query((width) => ({ width }))({
      sm: '34em', md: '45em', lg: '58em', xl: '70em', xx: '99em',
    });

  return {
    marginRight: 'auto',
    marginLeft: 'auto',
    ...props,
  };
};


export default container;
