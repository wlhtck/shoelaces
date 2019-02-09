import { curry } from 'lodash/fp';

export default curry(
  (predicateFn, func1, func2) => (predicateFn ? func1 : func2),
);
