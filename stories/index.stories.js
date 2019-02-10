import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { Col, Container, Row } from '../packages/styled-shoelaces/src';
import Box from '../common/Box';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('💅StyledShoelaces', module)
  .add('Basic Example', () => (
    <Container>
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
  ));
