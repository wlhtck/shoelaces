import { flattenMin } from '../util/media'
import render from '../util/render'
/**
*
* Utility function for calculating col size
* Values must be between 0 and 1
*
**/
const colSize = num => num * 100 + '%'

/**
*
* Mixin for setting column width
* returns css for flex-basis and max-width depending on num
* uses colSize to determine width
* also accepts 'auto'
*
**/
const colWidth = size => {
  if (size === 'auto') {
    return {
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%'
    }
  }

  const width = colSize(size)

  return {
    flexBasis: `${width}`,
    maxWidth: `${width}`
  }
}

/**
*
* Mixin for setting offset
* uses colSize to calculate margin for the given side
*
**/
// TODO: Fix the colOffset, currently the prog only accepts a number
// this won't work in responsive column implementations
const colOffset = num => {
  if (!num) return {}
  return {
    marginLeft: `${colSize(num)}`
  }
}

const col = ({ gutter, reverse, offset, ...props }) => ({
  boxSizing: 'border-box',
  flex: '0 0 auto',
  padding: gutter,
  flexDirection: reverse ? 'column-reverse' : 'initial',
  ...colOffset(offset),
  ...flattenMin(props, colWidth)
})

col.defaultProps = {
  gutter: '0.5em'
}

export default render(col)
