export const row = ({ gutter = false, reverse = false }) => {
  return {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: reverse ? 'row-reverse' : 'row',
    flexWrap: 'wrap',
    marginLeft: gutter || '-0.5em',
    marginRight: gutter || '-0.5em'
  }
}

export default row
