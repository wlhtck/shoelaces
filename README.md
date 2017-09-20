# { 👟 } shoelaces-js

[![CircleCI](https://circleci.com/gh/will-hitchcock/shoelaces-js.svg?style=svg)](https://circleci.com/gh/will-hitchcock/shoelaces-js)

A CSS in JS grid system

## Features
* Pure JS, no dependencies
* Works with < 💅 > styled-components and { 💄 } glamorous
* Based on flexbox

## Getting started

```
npm install --save shoelaces
```

- Simple react component applying col styles to a div
- Exposes the `col` api to

```javascript
import { col, row, container } from 'shoelaces'
import styled from 'styled-components'

export const Col = styled.div`${col}`
export default col

// render = () => {
//   <Col xs={1} sm={0.5}>
//     <p>Column content...</p>
//   </Col>
// }
```

## Docs

### Grid

#### container
Top level content container
- props:
  - fluid: bool
    - whether or not to use a fluid full-width container or a static width container with breakpoints
#### row
Container to separate content vertically
- props:
  - gutter: string
    - negative margin on the right and left (use with col gutter)
  - reverse: bool
    - whether to use `row-reverse` or `row`
#### col
Column component to separate content horizontally
- props:
  - gutter: string
    - padding around the column (default 0.5em)
  - reverse: bool
    - whether to use `row-reverse` or `row`
  - xs, sm, mg, lg, xl, xx: one of [number, 'auto']
    - width of the column at the given breakpoint
    - number should be between 0 and 1, use math to implement a 12 column system or any system you choose!
    - `{ xs: 12 / 12, md: 6 / 12 }`
