import Container from '../Container'

describe('<Container />', () => {
  it('should render a <Container />', () => {
    expect(shallow(<Container />)).toMatchSnapshot()
  })
})
