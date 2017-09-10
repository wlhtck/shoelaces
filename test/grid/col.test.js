import { colSize, colWidth, colOffset, col } from '../../src/grid/col'

describe('col', () => {
  let expectedStyles

  describe('colSize', () => {
    it('should returns the col size as a percentage', () => {
      expect(colSize(1)).toBe('100%')
    })
  })

  describe('colWidth', () => {
    beforeEach(() => {
      expectedStyles = {
        flexBasis: 0,
        maxWidth: '100%'
      }
    })

    it('should render auto witdth column', () => {
      expectedStyles.flexGrow = 1
      expect(colWidth('auto')).toEqual(expectedStyles)
    })

    it('should render a 50% width column', () => {
      expectedStyles.flexBasis = '50%'
      expectedStyles.maxWidth = '50%'
      expect(colWidth(0.5)).toEqual(expectedStyles)
    })
  })

  describe('colOffset', () => {
    it('should render no styles', () => {
      expect(colOffset()).toEqual({})
    })

    it('should render an offset of 50%', () => {
      expect(colOffset(0.5)).toEqual({ marginLeft: '50%' })
    })
  })

  describe('col', () => {
    beforeEach(() => {
      expectedStyles = {
        boxSizing: 'border-box',
        flex: '0 0 auto',
        padding: '0.5em',
        flexDirection: 'initial'
      }
    })

    it('should render the default col', () => {
      expect(col({})).toEqual(expectedStyles)
    })

    it('should render a col with a 1em gutter', () => {
      expectedStyles.padding = '1em'
      expect(col({ gutter: '1em' })).toEqual(expectedStyles)
    })

    it('should render a col with a column-reverse', () => {
      expectedStyles.flexDirection = 'column-reverse'
      expect(col({ reverse: true })).toEqual(expectedStyles)
    })

    it('should render a 50% width col', () => {
      const mockStyles = {
        '@media (min-width: 0)': {
          flexBasis: '50%',
          maxWidth: '50%'
        }
      }

      expect(col({ xs: '0.5' })).toEqual({
        ...expectedStyles,
        ...mockStyles
      })
    })
  })
})
