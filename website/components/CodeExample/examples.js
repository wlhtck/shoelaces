import StyledShoelaces from '../../../packages/styled-shoelaces/src';
import Header from '../Header';
import Box from '../../../common/Box';

const ReactScope = { Box, ...StyledShoelaces };

const examples = [
  {
    name: 'basic',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
    <Col xs={1 / 5}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1 / 2}><Box /></Col>
    <Col xs={1 / 2}><Box /></Col>
  </Row>
</Container>
  `,
  },
  {
    name: 'justify',
    header: 'Justification',
    scope: { ...ReactScope, Header },
    code: `<Container>
  <Header type="h3">Default (between)</Header>
  <Row>
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Header type="h3">Around</Header>
  <Row justifyContent="around">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Header type="h3">Center</Header>
  <Row justifyContent="center">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Header type="h3">Start</Header>
  <Row justifyContent="start">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
  <Header type="h3">End</Header>
  <Row justifyContent="end">
    <Col xs={1 / 3}><Box /></Col>
    <Col xs={1 / 3}><Box /></Col>
  </Row>
</Container>
  `,
  },
  {
    name: 'nesting',
    header: 'Nesting',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1 / 2}>
      <Box color="primaryDark">
        <Row>
          <Col xs={1 / 3}><Box/></Col>
          <Col xs={2 / 3}>
            <Box>
              <Row>
                <Col xs={1 / 4}><Box color="primaryDarker"/></Col>
                <Col xs={3 / 4}><Box color="primaryDarker"/></Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Box>
    </Col>
    <Col xs={1 / 2}><Box color="primaryDark" /></Col>
  </Row>
</Container>
  `,
  },
  {
    name: 'responsive',
    header: 'Responsive',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
    <Col xs={1} md={1 / 2} lg={1 / 4}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1} lg={1 / 3}><Box /></Col>
    <Col xs={1} lg={1 / 3}><Box /></Col>
    <Col xs={1} lg={1 / 3}><Box /></Col>
  </Row>
</Container>
  `,
  },
  {
    name: 'math',
    header: 'Fancy pants math',
    scope: ReactScope,
    code: `<Container>
  <Row>
    <Col xs={1} md={1 / Math.PI}><Box /></Col>
    <Col xs={1} md={1 / 1 - (1 / Math.PI)}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1} md={1 / 1 - (1 / Math.E)}><Box /></Col>
    <Col xs={1} md={1 / Math.E}><Box /></Col>
  </Row>
  <Row>
    <Col xs={1} md={1 - (1 / ((1 + Math.sqrt(5)) / 2))}><Box /></Col>
    <Col xs={1} md={1 / ((1 + Math.sqrt(5)) / 2)}><Box /></Col>
  </Row>
</Container>
`,
  },
];

export default examples;
