import { min, max, between, flattenMin, flattenMax } from '../media'

describe('media', () => {
  describe('min', () => {
    it('renders the styles without a media query', () => {
      expect(min()({ key: 'value' })).toMatchSnapshot()
    })

    it('renders the styles without a media query', () => {
      expect(min('xs')({ key: 'value' })).toMatchSnapshot()
    })

    it('renders the styles inside a min md media query', () => {
      expect(min('md')({ key: 'value' })).toMatchSnapshot()
    })
  })

  describe('max', () => {
    it('renders the styles without a media query', () => {
      expect(max()({ key: 'value' })).toMatchSnapshot()
    })

    it('renders the styles inside a max md media query', () => {
      expect(max('md')({ key: 'value' })).toMatchSnapshot()
    })
  })

  describe('between', () => {
    it('renders the styles without a media query', () => {
      expect(between()({ key: 'value' })).toMatchSnapshot()
    })

    it('renders the styles without a media query', () => {
      expect(between('xs')({ key: 'value' })).toMatchSnapshot()
    })

    it('renders the styles without a media query', () => {
      expect(between(null, 'lg')({ key: 'value' })).toMatchSnapshot()
    })

    it('renders the styles inside a between md and lg media query', () => {
      expect(between('md', 'lg')({ key: 'value' })).toMatchSnapshot()
    })
  })

  describe('flattenMin', () => {
    it('renders the renders width 0.5em inside a min xs media query', () => {
      expect(
        flattenMin({ xs: '0.5em', bp: '10em' }, width => ({ width }))
      ).toMatchSnapshot()
    })

    it('renders the renders width 0.5em without a media query', () => {
      expect(
        flattenMin('0.5em', width => ({ width }))
      ).toMatchSnapshot()
    })
  })

  describe('flattenMax', () => {
    it('renders the renders width 0.5em inside a max xl media query', () => {
      expect(
        flattenMax({ xl: '5em', bp: '10em' }, width => ({ width }))
      ).toMatchSnapshot()
    })

    it('renders the renders width 0.5em without a media query', () => {
      expect(
        flattenMax('0.5em', width => ({ width }))
      ).toMatchSnapshot()
    })
  })
})
