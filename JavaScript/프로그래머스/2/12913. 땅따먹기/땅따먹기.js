function solution(land) {
  let prev = land[0].slice()

  for (let i = 1; i < land.length; i++) {
    const cur = Array(4).fill(0)

    for (let j = 0; j < 4; j++) {
      let best = 0
      for (let k = 0; k < 4; k++) {
        if (k === j) continue
        if (prev[k] > best) best = prev[k]
      }
      cur[j] = land[i][j] + best
    }

    prev = cur
  }

  return Math.max(...prev)
}
