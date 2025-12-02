const fs = require("fs")

const [size, ...board] = fs.readFileSync(0, "utf8").trim().split("\n")
const [h, w] = size.split(" ").map(Number)

function main() {

  let min = w * h
  for (let y = 0; y <= board.length - 8; y++) {
    for (let x = 0; x <= board[0].length - 8; x++) {
      min = Math.min(
        min,
        getRewriteColorCount8x8(board, x, y, { W: 0, B: 1 }),
        getRewriteColorCount8x8(board, x, y, { W: 1, B: 0 }),
      )
    }
  }

  console.log(min)
}

function getRewriteColorCount8x8(board, startX, startY, colors) {
  const maxX = startX + 8
  const maxY = startY + 8

  if (board.length < maxY || board[0]?.length < maxX) {
    return Infinity
  }

  let count = 0
  for (let y = startY; y < maxY; y++) {
    for (let x = startX; x < maxX; x++) {
      const tile = board[y][x]
      if ((y + x) % 2 !== colors[tile]) count++
    }
  }

  return count
}

main()