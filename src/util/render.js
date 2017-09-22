cosnt render = (comp, props) => {
  return (props) => {
    let newProps = {}
    if (comp.defaultProps) {
      new props = (...comp.defaultProps, ...props)
    } else {
      newProps = props
    }
    return comp(newProps)
  }
}
