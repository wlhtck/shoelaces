import { flattenMin } from '../util/media'

export const container = ({ fluid }) => {
  const width = fluid ?
  {
    width: '100%',
    paddingRight: 0,
    paddingLeft: 0,
    overflowX: 'hidden'
  } :
  flattenMin(
    { sm: '34em', md: '45em', lg: '58em', xl: '70em', xx: '99em' },
    width => {
      return { width }
    })

  return {
    marginRight: 'auto',
    marginLeft: 'auto',
    ...width
  }
}

export default container