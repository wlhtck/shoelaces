import render from '../util/render'
import { oneOf, bool } from '../util/types'

const properties = {
  around: 'space-around',
  auto: 'auto',
  baseline: 'baseline',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  even: 'space-evenly',
  start: 'flex-start',
  stretch: 'stretch'
}

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
  wrap
}) => ({
  alignContent: properties[alignContent],
  alignItems: properties[alignItems],
  alignSelf: properties[alignSelf],
  display: inline ? 'inline-flex' : 'flex',
  flexDirection: `${column ? 'column' : 'row'}${reverse ? '-reverse' : ''}`,
  flexWrap: wrap ? 'wrap' : 'nowrap',
  justifyContent: properties[justifyContent],
  order: first ? -1 : last ? 1 : 0
})

flex.defaultProps = {
  alignContent: 'start',
  alignItems: 'stretch',
  alignSelf: 'auto',
  justifyContent: 'between'
}

flex.propTypes = {
  alignContent: oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  alignItems: oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  alignSelf: oneOf(['auto', 'start', 'end', 'center', 'baseline', 'stretch']),
  column: bool,
  first: bool,
  inlin: bool,
  justifyContent: oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
  last: bool,
  reverse: bool,
  wrap: bool
}

export default render(flex)
