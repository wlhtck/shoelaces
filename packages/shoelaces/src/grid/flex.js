import { isUndefined, omitBy, flow } from 'lodash/fp';

const properties = {
  around: 'space-around',
  auto: 'auto',
  baseline: 'baseline',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  even: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch',
};

const getOrder = (first, last) => {
  if (first) return -1;
  if (last) return 1;
  return undefined;
};

const getFlexDirection = (column, reverse) => {
  if (!(column || reverse)) {
    return undefined;
  }
  return `${column ? 'column' : 'row'}${reverse ? '-reverse' : ''}`;
};

const flex = ({
  alignContent = 'start',
  alignItems = 'stretch',
  alignSelf = 'auto',
  column,
  first,
  inline,
  justifyContent = 'between',
  last,
  reverse,
  wrap,
} = {}) => ({
  alignContent: properties[alignContent],
  alignItems: properties[alignItems],
  alignSelf: properties[alignSelf],
  display: inline ? 'inline-flex' : 'flex',
  flexWrap: wrap ? 'wrap' : undefined,
  justifyContent: properties[justifyContent],
  flexDirection: getFlexDirection(column, reverse),
  order: getOrder(first, last),
});

export default flow(
  flex,
  omitBy(isUndefined),
);
