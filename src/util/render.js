const validate = (compName, propTypes, props) => {
  if (process.env.NODE_ENV !== 'production') {
    for (let propName in propTypes) {
      if (
        typeof propTypes[propName] === 'function' &&
        !propTypes[propName](props[propName])
      ) {
        console.error(
          `Invalid value for ${propName} (${props[
            propName
          ]}) supplied to ${compName}`
        )
      }
    }
  }
  return props
}

export const render = comp => props =>
  comp(
    validate(comp.name, comp.propTypes, {
      ...(comp.defaultProps || {}),
      ...props
    })
  )

export default render
