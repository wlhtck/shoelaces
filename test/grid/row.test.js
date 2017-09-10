import { row } from '../../src/grid/row'

describe('row', () => {
  let expectedStyles

  beforeEach(() => {
    expectedStyles = {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: '-0.5em',
      marginRight: '-0.5em'
    }
  })

  it('renders row styles', () => {
    expect(row({})).toEqual(expectedStyles)
  })

  it('renders with row-reverse', () => {
    expectedStyles.flexDirection = 'row-reverse'
    expect(row({ reverse: true })).toEqual(expectedStyles)
  })

  it('renders with custom gutters', () => {
    expectedStyles.marginRight = '1em'
    expectedStyles.marginLeft = '1em'
    expect(row({ gutter: '1em' })).toEqual(expectedStyles)
  })
})
