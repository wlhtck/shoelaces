import React from 'react';
import { storiesOf } from '@storybook/react';

import { Col, Container, Row } from '../packages/emotion-shoelaces/lib';
import Box from '../common/Box';

storiesOf('👩‍🎤EmotionShoelaces', module)
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
