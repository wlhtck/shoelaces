const validate = (compName, propTypes, props) => {
  if (process.env.NODE_ENV !== 'production') {
    for (let propName in propTypes) {
      if (
        typeof propTypes[propName] === 'function' &&
        !propTypes[propName](props[propName])
      ) {
        throw new Error(
          `Invalid value for ${propName} (${props[propName]}) supplied to ${compName}. Expected type ${propTypes[propName].name}.` // eslint-disable-line max-len
        )
      }
    }
  }
  return props
}

export const render = comp => props =>
  comp(
    validate(comp.name, comp.propTypes, {
      ...comp.defaultProps,
      ...props
    })
  )

export default render
