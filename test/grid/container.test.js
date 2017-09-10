import { container } from '../../src/grid/container'
import media from '../../src/util/media'

describe('container', () => {
  let expectedStyles

  beforeEach(() => {
    expectedStyles = {
      marginRight: 'auto',
      marginLeft: 'auto'
    }
  })
  it('should render a fluid container', () => {
    expectedStyles = {
      width: '100%',
      paddingRight: 0,
      paddingLeft: 0,
      overflowX: 'hidden',
      ...expectedStyles
    }

    expect(container({ fluid: true })).toEqual(expectedStyles)
  })

  it('should render a responsive container', () => {
    const mockStyles = {
      '@media (min-width: 36em)': { width: '34em' },
      '@media (min-width: 48em)': { width: '45em' },
      '@media (min-width: 62em)': { width: '58em' },
      '@media (min-width: 75em)': { width: '70em' }
    }
    const flattenMinSpy = jest
      .spyOn(media, 'flattenMin')

    expect(container({})).toEqual({
      ...mockStyles,
      ...expectedStyles
    })
    expect(flattenMinSpy).toHaveBeenCalled
  })
})
