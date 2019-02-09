const validatorFactory = (type) => (prop) => {
  if (typeof prop === type || prop === undefined) {
    return true;
  }
  return false;
};

export const oneOf = (arr) => (prop) => {
  if (arr.indexOf(prop) !== -1 || prop === undefined) {
    return true;
  }
  return false;
};

export const unit = (prop) => {
  if (prop === 0) { return true; }
  if (typeof prop !== 'string') { return false; }
  if (
    prop.match(
      /^(auto|0)$|^[+-]?[0-9]+\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc|ch|vh|vw|vmin|vmax)$/,
    ) || prop === undefined
  ) {
    return true;
  }
  return false;
};

export const string = validatorFactory('string');
export const bool = validatorFactory('boolean');
export const number = validatorFactory('number');
