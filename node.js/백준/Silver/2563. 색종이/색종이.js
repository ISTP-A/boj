const fs = require("fs")

const [size, ...boards] = fs.readFileSync(0, "utf8").trim().split("\n")

function fill(board, x, y) {
  let cnt = 0
  for (let i = x; i < x + 10; i++)
    for (let j = y; j < y + 10; j++)
      if (board[i][j] === 0) {
        board[i][j] = 1
        cnt++
      }

  return cnt
}

function main() {
  const big_board = Array.from({ length: 100 }, () => Array(100).fill(0))

  let sum = 0

  for (const board of boards) {
    const [x, y] = board.split(' ').map(Number)
    sum += fill(big_board, x, y)
  }

  console.log(sum)
}

main()
