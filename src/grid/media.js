import breakpoints, { keys } from '../const/breakpoints'
import deepmerge from 'deepmerge'

const queries = {
  min: key => `@media (min-width: ${breakpoints[key]})`,
  max: key => `@media (max-width: ${breakpoints[key]})`,
  between: (start, end) =>
    `@media (min-width: ${breakpoints[start]} and (max-width: ${breakpoints[
      end
    ]}`
}

export const min = key => args => {
  if (!Object.keys(args).length) return null
  if (!key || !breakpoints[key]) {
    return args
  }
  return { [queries.min(key)]: args }
}

export const max = key => args => {
  if (!Object.keys(args).length) return null
  if (!key) {
    return args
  }
  return { [queries.max(key)]: args }
}

export const between = (start, end) => args => {
  if (!Object.keys(args).length) return null
  if (!start || !end) {
    return args
  }
  return { [queries.between(start, end)]: args }
}

export const doQuery = (query, obj, func) => {
  let processedObj = {}

  if (typeof obj !== 'object') {
    return { ...processedObj, ...func(obj) }
  }

  for (let key in obj) {
    processedObj = { ...processedObj, ...query(key)(func(obj[key])) }
  }

  return processedObj
}

export const deepQuery = (query, arr) =>
  deepmerge.all(arr.map(item => doQuery(query, item.data, item.mixin)))

export default { min, max, between, doQuery, deepQuery }
