// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme'
import React from 'react'
global.React = React
global.shallow = shallow
global.render = render
global.mount = mount

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
