import container from '../container'

describe('container', () => {
  it('renders default container styles', () => {
    expect(container()).toMatchSnapshot()
  })

  it('renders fluid container styles', () => {
    expect(container({ fluid: true })).toMatchSnapshot()
  })
})
