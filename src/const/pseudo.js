export const active = '&:active'
export const any = '&:any'
export const checked = '&:checked'
// export const default = '&:default'
export const dir = a => `&:dir(${a})`
export const disabled = '&:disabled'
export const empty = '&:empty'
export const enabled = '&:enabled'
export const first = '&:first'
export const firstChild = '&:first-child'
export const firstOfType = '&:first-of-type'
export const fullscreen = '&:fullscreen'
export const focus = '&:focus'
export const hover = '&:hover'
export const indeterminate = '&:indeterminate'
export const inRange = '&:in-range'
export const invalid = '&:invalid'
export const lang = a => `&:lang(${a})`
export const lastChild = '&:last-child'
export const lastOfType = '&:last-of-type'
export const left = '&:left'
export const link = '&:link'
export const not = a => `&:not(${a})`
export const nthChild = a => `&:nth-child(${a})`
export const nthLastChild = a => `&:nth-last-child(${a})`
export const nthLastOfType = a => `&:nth-last-of-type(${a})`
export const nthOfType = a => `&:nth-of-type(${a})`
export const onlyChild = '&:only-child'
export const onlyOfType = '&:only-of-type'
export const optional = '&:optional'
export const outOfRange = '&:out-of-range'
export const readOnly = '&:read-only'
export const readWrite = '&:read-write'
export const required = '&:required'
export const right = '&:right'
export const root = '&:root'
export const scope = '&:scope'
export const target = '&:target'
export const valid = '&:valid'
export const visited = '&:visited'
export const after = '&::after'
export const before = '&::before'
export const cue = '&::cue'
export const firstLetter = '&::first-letter'
export const firstLine = '&::first-line'
export const selection = '&::selection'

export const pseudo = {
  active,
  any,
  checked,
  // default,
  dir,
  disabled,
  empty,
  enabled,
  first,
  firstChild,
  firstOfType,
  fullscreen,
  focus,
  hover,
  indeterminate,
  inRange,
  invalid,
  lang,
  lastChild,
  lastOfType,
  left,
  link,
  not,
  nthChild,
  nthLastChild,
  nthLastOfType,
  nthOfType,
  onlyChild,
  onlyOfType,
  optional,
  outOfRange,
  readOnly,
  readWrite,
  required,
  right,
  root,
  scope,
  target,
  valid,
  visited,
  after,
  before,
  cue,
  firstLetter,
  firstLine,
  selection
}

export default pseudo
