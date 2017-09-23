import render from '../util/render'
import flex from './flex'

const row = ({ gutter, ...props }) => ({
  boxSizing: 'border-box',
  flex: '0 1 auto',
  ...flex(props),
  marginLeft: `-${gutter}`,
  marginRight: `-${gutter}`
})

row.defaultProps = {
  gutter: '0.5em',
  wrap: true
}

export default render(row)
