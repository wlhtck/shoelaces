import Flex from '../Flex'

describe('<Flex />', () => {
  it('should render a <Flex />', () => {
    expect(shallow(<Flex />)).toMatchSnapshot()
  })
})
