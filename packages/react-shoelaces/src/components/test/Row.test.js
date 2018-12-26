import Row from '../Row'

describe('<Row />', () => {
  it('should render a <Row />', () => {
    expect(shallow(<Row />)).toMatchSnapshot()
  })
})
