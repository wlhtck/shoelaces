import render from '../util/render';
import { oneOf, bool } from '../util/types';
import { min, deepQuery } from './media';

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

const _alignContent = (alignContent) => (alignContent
  ? {
    alignContent: properties[alignContent],
  }
  : {});

const _alignItems = (alignItems) => (alignItems
  ? {
    alignItems: properties[alignItems],
  }
  : {});

const _alignSelf = (alignSelf) => (alignSelf
  ? {
    alignSelf: properties[alignSelf],
  }
  : {});

const _display = (inline) => ({ display: inline ? 'inline-flex' : 'flex' });

const _flexDirection = (column, reverse) => (column || reverse
  ? {
    flexDirection: `${column ? 'column' : 'row'}${reverse
      ? '-reverse'
      : ''}`,
  }
  : {});

const _flexWrap = (wrap) => (wrap ? { flexWrap: wrap ? 'wrap' : 'nowrap' } : {});

const _justifyContent = (justifyContent) => (justifyContent ? { justifyContent: properties[justifyContent] } : {});

const _order = (first, last) => (first || last
  ? {
    order: first ? -1 : last ? 1 : 0,
  }
  : {});

const flex = ({
  alignContent,
  alignItems,
  alignSelf,
  column,
  first,
  inline,
  justifyContent,
  last,
  reverse,
  wrap,
}) => ({
  ...deepQuery(min, [
    { data: alignContent, mixin: _alignContent },
    { data: alignItems, mixin: _alignItems },
    { data: alignSelf, mixin: _alignSelf },
    { data: inline, mixin: _display },
    { data: wrap, mixin: _flexWrap },
    { data: justifyContent, mixin: _justifyContent },
  ]),
  // ..._alignContent(alignContent),
  // ..._alignItems(alignItems),
  // ..._alignSelf(alignSelf),
  // ..._display(inline),
  // ..._flexWrap(wrap),
  // ..._justifyContent(justifyContent),
  ..._flexDirection(column, reverse),
  ..._order(first, last),
});

flex.defaultProps = {
  alignContent: 'start',
  alignItems: 'stretch',
  alignSelf: 'auto',
  justifyContent: 'between',
};

flex.propTypes = {
  alignContent: oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'stretch',
  ]),
  alignItems: oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignSelf: oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
  column: bool,
  first: bool,
  inlin: bool,
  justifyContent: oneOf([
    'start',
    'end',
    'center',
    'between',
    'around',
    'evenly',
  ]),
  last: bool,
  reverse: bool,
  wrap: bool,
};

export default render(flex);
