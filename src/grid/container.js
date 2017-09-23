import { flattenMin } from '../util/media'
import render from '../util/render'

const container = ({ fluid, ...props }) => {
  const width = fluid ?
  {
    width: '100%',
    paddingRight: 0,
    paddingLeft: 0,
    overflowX: 'hidden'
  } :
  flattenMin(
    { sm: '34em', md: '45em', lg: '58em', xl: '70em', xx: '99em' },
    width => ({ width })
  )

  return {
    marginRight: 'auto',
    marginLeft: 'auto',
    ...width
  }
}

export default render(container)
