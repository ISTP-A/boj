const next = (x) => (x + 1) >> 1

function solution(n, a, b) {
  let round = 1

  while (n > 1) {
    if (a > b) [a, b] = [b, a]
    if ((a & 1) === 1 && b === a + 1) return round

    a = next(a)
    b = next(b)
    n >>= 1
    round++
  }

  return round
}
