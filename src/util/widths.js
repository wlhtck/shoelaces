export const getWidth = num => {
  const result = []

  for (let i = 0; i < num + 1;) {
    result.push(i++ / num)
  }
  return result
}
