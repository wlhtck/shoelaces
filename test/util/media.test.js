import {
  queries,
  min,
  max,
  between,
  flatten,
  flattenMin,
  flattenMax
} from '../../src/util/media'

describe('media', () => {
  const minQuery = '@media (min-width: 36em)'
  const maxQuery = '@media (max-width: 36em)'
  const betweenQuery = '@media (min-width: 36em and (max-width: 62em'
  const mockStyles = {
    mock: 'style'
  }

  describe('queries', () => {
    describe('min', () => {
      it('should return a min-width media query given a valid size key', () => {
        expect(queries.min('sm')).toBe(minQuery)
      })
    })

    describe('max', () => {
      it('should return a max-width media query given a valid size key', () => {
        expect(queries.max('sm')).toBe(maxQuery)
      })
    })

    describe('between', () => {
      it('should return a between media query given valid size keys', () => {
        expect(queries.between('sm', 'lg')).toBe(betweenQuery)
      })
    })
  })

  describe('min', () => {
    it('should wraps args in a media query for the given key', () => {
      expect(min('sm')(mockStyles)).toEqual({
        [minQuery]: mockStyles
      })
    })

    it('should return args unchanged', () => {
      expect(min(0)(mockStyles)).toEqual(mockStyles)
    })
  })

  describe('max', () => {
    it('should wraps args in a media query for the given key', () => {
      expect(max('sm')(mockStyles)).toEqual({
        [maxQuery]: mockStyles
      })
    })

    it('should return args unchanged', () => {
      expect(max(0)(mockStyles)).toEqual(mockStyles)
    })
  })

  describe('between', () => {
    it('should wraps args in a media query for the given key', () => {
      expect(between('sm', 'lg')(mockStyles)).toEqual({
        [betweenQuery]: mockStyles
      })
    })
  })

  describe('flatten', () => {
    it('should wrap the result of provided mixin for any valid size props', () => {
      const mixin = width => {
        return { width }
      }

      expect(flatten(queries.min, { sm: '1em' }, mixin)).toEqual({
        [minQuery]: { width: '1em' }
      })
    })
  })

  describe('flattenMin', () => {
    it('should wrap the result of provided mixin for any valid size props', () => {
      const mixin = width => {
        return { width }
      }

      expect(flattenMin({ sm: '1em' }, mixin)).toEqual({
        [minQuery]: { width: '1em' }
      })
    })
  })

  describe('flattenMax', () => {
    it('should wrap the result of provided mixin for any valid size props', () => {
      const mixin = width => {
        return { width }
      }

      expect(flattenMax({ sm: '1em' }, mixin)).toEqual({
        [maxQuery]: { width: '1em' }
      })
    })
  })
})
