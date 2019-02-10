import React from 'react';
import { Container, Row, Col } from '../../packages/styled-shoelaces/src';
import Button from '../components/Button';
import Header from '../components/Header';
import CodeExample from '../components/CodeExample';
import examples from '../components/CodeExample/examples';
import GlobalStyles from '../components/GlobalStyles';

export default () => (
  <Container>
    <GlobalStyles />
    <Col justifyContent="center">
      <Header>{'{ 👟 } Shoelaces'}</Header>
      <Header type="h2">Mobile first flexible CSS-in-JS grid.</Header>
    </Col>
    <Row justifyContent="center">
      <Button path="https://github.com/will-hitchcock/shoelaces">shoelaces</Button>
      <Button path="https://github.com/will-hitchcock/react-shoelaces">
            react-shoelaces
      </Button>
    </Row>
    {examples.map(({ name, ...item }) => <CodeExample key={name} {...item} />)}
  </Container>
);
