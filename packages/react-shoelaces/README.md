# < 👟 /> react-shoelaces
[![CircleCI](https://circleci.com/gh/will-hitchcock/react-shoelaces.svg?style=svg)](https://circleci.com/gh/will-hitchcock/react-shoelaces)

shoelaces for react

## Features
React component implementations for shoelaces

## Getting started

```
npm install --save react-shoelaces
```

## Docs

### Grid

#### Container
```javascript
import { Container } from 'react-shoelaces'

export const MyContainer = ({ children }) =>
  <Container>
    {children}
  </Container>
```
#### Row
```javascript
import { Row } from 'react-shoelaces'

export const MyRow = ({ children }) =>
  <Row gutter='0.5em'>
    {children}
  </Row>
```
#### Col
```javascript
import { Col } from 'react-shoelaces'

export const MyCol = ({ children }) =>
  <Col xs={1} md={6/12} gutter='0.5em'>
    {children}
  </Col>
```

#### Flex
```javascript
import { Flex } from 'react-shoelaces'

export const MyFlex = ({ children }) =>
  <Flex inline column first>
    {children}
  </Flex>
```
