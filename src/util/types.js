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

export default {
  string: validatorFactory('string'),
  bool: validatorFactory('boolean'),
  number: validatorFactory('number'),
  oneOf
}
