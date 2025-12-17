function solution(citations) {
  const arr = citations.sort((a, b) => a - b)
  const n = arr.length

  let hIndex = 0
  for (let i = 0; i < n; i++) {
    hIndex = Math.max(hIndex, Math.min(arr[i], n - i))
  }
  return hIndex
}
