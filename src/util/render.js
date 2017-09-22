export const render = comp => props => {
  if (comp.defaultProps) {
    return comp({ ...comp.defaultProps, ...props })
  }
  return comp({...{}, ...props})
}

export default render
