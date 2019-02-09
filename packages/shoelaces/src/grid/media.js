import {
  mapKeys, mapValues, flow, omitBy, isUndefined, isObject, curry,
} from 'lodash/fp';
import branch from '../util/branch';
import { breakpoints } from '../const/breakpoints';

const min = (key) => `@media (min-width: ${breakpoints[key]})`;

export default curry((func, val) => branch(
  isObject(val),
  flow(
    omitBy(isUndefined),
    mapKeys((key) => min(key)),
    mapValues((value) => func(value)),
  ),
  func,
)(val));
