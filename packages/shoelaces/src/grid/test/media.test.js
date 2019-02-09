import {
  min, max, between, flattenMin, flattenMax,
} from '../media';

describe('media', () => {
  describe('min', () => {
    it('renders the styles without a media query', () => {
      expect(min()({ key: 'value' })).toMatchSnapshot();
    });

    it('renders the styles without a media query', () => {
      expect(min('xs')({ key: 'value' })).toMatchSnapshot();
    });

    it('renders the styles inside a min md media query', () => {
      expect(min('md')({ key: 'value' })).toMatchSnapshot();
    });
  });

  describe('max', () => {
    it('renders the styles without a media query', () => {
      expect(max()({ key: 'value' })).toMatchSnapshot();
    });

    it('renders the styles inside a max md media query', () => {
      expect(max('md')({ key: 'value' })).toMatchSnapshot();
    });
  });

  describe('between', () => {
    it('renders the styles without a media query', () => {
      expect(between()({ key: 'value' })).toMatchSnapshot();
    });

    it('renders the styles without a media query', () => {
      expect(between('xs')({ key: 'value' })).toMatchSnapshot();
    });

    it('renders the styles without a media query', () => {
      expect(between(null, 'lg')({ key: 'value' })).toMatchSnapshot();
    });

    it('renders the styles inside a between md and lg media query', () => {
      expect(between('md', 'lg')({ key: 'value' })).toMatchSnapshot();
    });
  });
});
