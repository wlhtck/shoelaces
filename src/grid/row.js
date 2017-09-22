import render from '../util/render'

const row = ({ gutter, reverse }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 1 auto',
  flexDirection: reverse ? 'row-reverse' : 'row',
  flexWrap: 'wrap',
  marginLeft: `-${gutter}`,
  marginRight: `-${gutter}`
})

row.defaultProps = {
  gutter: '0.5em'
}

export default render(row)
