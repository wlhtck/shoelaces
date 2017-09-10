import sizes from '../const/sizes'

export const queries = {
  min: key => `@media (min-width: ${sizes[key]})`,
  max: key => `@media (max-width: ${sizes[key]})`,
  between: (start, end) =>
    `@media (min-width: ${sizes[start]} and (max-width: ${sizes[end]}`
}

export const min = key => args => {
  if (!key) return args
  return { [queries.min(key)]: args }
}

export const max = key => args => {
  if (!key) return args
  return { [queries.max(key)]: args }
}

export const between = (start, end) => args => {
  return { [queries.between(start, end)]: args }
}

export const flatten = (query, props, mixin) => {
  const output = {}

  Object.keys(sizes)
    .filter(a => !!props[a])
    .map(value => (output[query(value)] = mixin(props[value])))
  return output
}

export const flattenMin = (...args) => flatten(queries.min, ...args)
export const flattenMax = (...args) => flatten(queries.max, ...args)

export default { queries, min, max, between, flatten, flattenMin, flattenMax }
