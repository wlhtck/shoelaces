import {
  mapKeys, mapValues, flow,
} from 'lodash/fp';
import { breakpoints } from '../const/breakpoints';

const min = (key) => `@media (min-width: ${breakpoints[key]})`;

export default (func) => flow(
  mapKeys((key) => min(key)),
  mapValues((value) => func(value)),
);
