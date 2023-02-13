const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
]
const safelist = [
  ...colors.map((c) => `bg-${c}-500`),
  ...colors.map((c) => `hover:bg-${c}-100`)
]
export { safelist }
