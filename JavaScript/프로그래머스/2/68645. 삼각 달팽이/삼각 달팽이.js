function solution(n) {
  const tri = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0))

  let y = -1
  let x = 0
  let num = 1

  for (let i = 0; i < n; i++) {
    for (let step = i; step < n; step++) {
      if (i % 3 === 0) {
        y += 1
      } else if (i % 3 === 1) {
        x += 1
      } else {
        y -= 1
        x -= 1
      }
      tri[y][x] = num++
    }
  }

  return tri.flat()
}
