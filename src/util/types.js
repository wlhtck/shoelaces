import breakpoints from '../const/breakpoints'

const validatorFactory = type => prop => {
  if (typeof prop === type || prop === undefined) {
    return true
  }
  return false
}

const oneOf = arr => prop => {
  if (arr.indexOf(prop) !== -1 || prop === undefined) {
    return true
  }
  return false
}

const responsive = prop => {
  if (prop === undefined) { return true }
  if (typeof prop !== 'object') { return false }
  for (const key in prop) {
    if (!breakpoints.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export default {
  string: validatorFactory('string'),
  bool: validatorFactory('boolean'),
  number: validatorFactory('number'),
  oneOf,
  responsive
}
