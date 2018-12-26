import render from '../util/render'
import { min, doQuery } from './media'

const container = ({ fluid }) => {
  const width = fluid
    ? {
      width: '100%',
      paddingRight: 0,
      paddingLeft: 0,
      overflowX: 'hidden'
    }
    : doQuery(
        min,
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
