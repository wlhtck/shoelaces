import Col from '../Col'

describe('<Col />', () => {
  it('should render a <Col />', () => {
    expect(shallow(<Col />)).toMatchSnapshot()
  })
})
