import render from '../util/render'
import { unit } from '../util/types'
import flex from './flex'
import { flattenMin } from './media'

const colSize = num => num * 100 + '%'

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

const colOffset = num => {
  if (!num) return {}
  return {
    marginLeft: `${colSize(num)}`
  }
}

const col = ({ gutter, offset, size, ...props }) => ({
  boxSizing: 'border-box',
  flex: '0 0 auto',
  padding: gutter,
  ...flex(props),
  ...flattenMin(offset, colOffset),
  ...flattenMin(props, colWidth)
})

col.defaultProps = {
  column: true,
  gutter: '0.5em'
}

col.propTypes = {
  gutter: unit
}

export default render(col)
