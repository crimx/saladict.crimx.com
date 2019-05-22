export function shuffle(arr) {
  for (let end = arr.length - 1; end > 0; end--) {
    const pick = Math.floor(Math.random() * (end + 1))
    const t = arr[end]
    arr[end] = arr[pick]
    arr[pick] = t
  }
  return arr
}

export default shuffle
