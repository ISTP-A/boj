function solution(x, y, n) {
  const dist = Array(y + 1).fill(-1)
  const q = [x]
  dist[x] = 0

  let head = 0
  while (head < q.length) {
    const cur = q[head++]

    if (cur === y) return dist[cur]

    const candidates = [cur + n, cur * 2, cur * 3]
    for (const next of candidates) {
      if (next <= y && dist[next] === -1) {
        dist[next] = dist[cur] + 1
        q.push(next)
      }
    }
  }

  return -1
}
