import breakpoints from '../const/breakpoints'

const queries = {
  min: key => `@media (min-width: ${breakpoints[key]})`,
  max: key => `@media (max-width: ${breakpoints[key]})`,
  between: (start, end) =>
    `@media (min-width: ${
      breakpoints[start]
    } and (max-width: ${
      breakpoints[end]
    }`
}

export const min = key => args => {
  if (!key || !breakpoints[key]) { return args }
  return { [queries.min(key)]: args }
}

export const max = key => args => {
  if (!key) { return args }
  return { [queries.max(key)]: args }
}

export const between = (start, end) => args => {
  if (!start || !end) { return args }
  return { [queries.between(start, end)]: args }
}

export const flatten = (query, prop, mixin) => {
  if (typeof prop !== 'object') { return mixin(prop) }
  const output = {}

  Object.keys(breakpoints)
    .filter(a => !!prop[a])
    .map(value => (output[query(value)] = mixin(prop[value])))

  return output
}

export const flattenMin = (...args) => flatten(queries.min, ...args)
export const flattenMax = (...args) => flatten(queries.max, ...args)

export default { min, max, between, flattenMin, flattenMax }
