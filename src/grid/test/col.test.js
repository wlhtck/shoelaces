import col from '../col'

describe('col', () => {
  it('renders default col styles', () => {
    expect(col()).toMatchSnapshot()
  })

  it('renders reverse col styles', () => {
    expect(col({ reverse: true })).toMatchSnapshot()
  })

  it('renders 0.5 offset col styles', () => {
    expect(col({ offset: 0.5 })).toMatchSnapshot()
  })

  it('renders size xs 0.5 col styles', () => {
    expect(col({ xs: 0.5 })).toMatchSnapshot()
  })

  it('renders size md auto col styles', () => {
    expect(col({ md: 'auto' })).toMatchSnapshot()
  })
})
