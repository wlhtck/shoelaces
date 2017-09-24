## 0.1.0
##### _September 23, 2017_

- Exposed existing `min`, `max` and `between` media queries via api
  - `import { min, max, between } from 'shoelaces'`
- Added support for flex properties
  - These properties are available on row and col
  - flex properties can be used manually by importing flex : `import flex from 'shoelaces'`
- Added basic prop validation
- Fixed an issue where `min-width: 0` would render
([#5](https://github.com/will-hitchcock/react-shoelaces/pull/5))
