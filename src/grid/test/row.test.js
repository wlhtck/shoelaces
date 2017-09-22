import row from '../row'

describe('row', () => {
  it('renders default row styles', () => {
    expect(row()).toMatchSnapshot()
  })

  it('renders reverse row styles', () => {
    expect(row({ reverse: true })).toMatchSnapshot()
  })

  it('renders row styles with a 15px gutter', () => {
    expect(row({ gutter: '15px' })).toMatchSnapshot()
  })

  it('renders reverse row styles with a 20em gutter', () => {
    expect(row({ gutter: '20em', reverse: true })).toMatchSnapshot()
  })
})
