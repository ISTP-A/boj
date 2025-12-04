const fs = require("fs")

function findSection(half, row, col) {
  if (row < half && col < half) return 0
  if (row < half && col >= half) return 1
  if (row >= half && col < half) return 2
  if (row >= half && col >= half) return 3
}

function solution(N, r, c) {
  let count = 0
  for (let i = N; i > 0; i--) {
    const half = Math.pow(2, i - 1)
    count += findSection(half, r, c) * Math.pow(half, 2)
    r %= half
    c %= half
  }
  return count
}

const [N, r, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)
console.log(solution(N, r, c))
