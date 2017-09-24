# { 👟 } shoelaces

[![CircleCI](https://circleci.com/gh/will-hitchcock/shoelaces.svg?style=svg)](https://circleci.com/gh/will-hitchcock/shoelaces)

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
### flex
Flex-box properties these props are available on row and col or can be used on their own `import { flex } from shoelaces`
- props:
  - `alignContent` - string, accepted values: 'start', 'end', 'center', 'between', 'around', 'stretch'
    - corresponds to `align-content` css property
    - default: `'start'`
  - `alignItems` - string, accepted values: 'start', 'end', 'center', 'baseline', 'stretch'
    - corresponds to `align-items` css property
    - default: `'stretch'`
  - `alignSelf` - string, accepted values: 'auto', 'start', 'end', 'center', 'baseline', 'stretch'
    - corresponds to `align-self` css property
    - default: `'auto'`
  - `column` - bool
    - renders `flex-direction` as `column`
  - `first` - bool
    - renders `order: -1` making the item first in its parent
  - `inline` - bool
    - renders `display: inline-flex` instead of `display: flex`
  - `justifyContent` - string, accepted values: 'start', 'end', 'center', 'between', 'around', 'evenly'
    - corresponds to `jsutify-content` css property
    - default: `'between'`
  - `last` - bool
    - renders `order: 1` making the item last in its parent
  - `reverse` - bool
    - renders `flex-direction: row-reverse` unless using column then `flex-direction: column-reverse`
  - `wrap`
    - renders `flex-wrap: wrap` instead of `flex-wrap: nowrap`
### media queries
- Media queries are available as `min`, `max`, and `between`
- They accept a media query key (or 2 in the case of `between`) and return a function that will wrap the input in the specified media query.
- Ex:
```javascript
min('md')({ backgroundColor: 'steelblue' })
// =>
// {
//   '@media (max-width: 48em)': {
//     backgroudColor: 'steelblue'
//   }
// }
```

The following breakpoints are available:
Note that because the value for xs is 0 using it with min will **not** wrap styles in a media query
- xs: 0
- sm: '36em' // 576px
- md: '48em' // 768px
- lg: '62em' // 992px
- xl: '75em' // 1200px
- xx: '105em' // 1680px
