export const xs = 0
export const sm = '36em' // 576px
export const md = '48em' // 768px
export const lg = '62em' // 992px
export const xl = '75em' // 1200px
export const xx = '105em' // 1680px

export const sizes = { xs, sm, md, lg, xl }

const compareKeys(a, b) {
  const aKeys = Object.keys(a).sort()
  const bKeys = Object.keys(b).sort()
  bKeys.map((item, index) => {
    if (item !=== aKeys[index])
    throw new Error(`Unknown breakpoint ${item} found!`)
    return false
  })
  return true
}

export default sizes
