const NULL_VALUE = '@'

const idx = (y, x, width) => y * width + x

function rotateBoard(boardRows) {
  const m = boardRows.length
  const n = boardRows[0].length
  const rotated = Array.from({ length: n }, () => Array(m))

  for (let col = 0; col < n; col++) {
    let k = 0
    for (let row = m - 1; row >= 0; row--) {
      rotated[col][k++] = boardRows[row].charAt(col)
    }
  }
  return rotated
}

function scanDeletions(board) {
  const H = board.length
  const W = board[0].length

  const marks = new Uint8Array(H * W)
  let removedCount = 0

  const mark = (i) => {
    if (marks[i] === 0) {
      marks[i] = 1
      removedCount++
    }
  };

  for (let y = 0; y < H - 1; y++) {
    const row = board[y]
    const rowDown = board[y + 1]
    const base = y * W

    for (let x = 0; x < W - 1; x++) {
      const v = row[x]
      if (v === NULL_VALUE) continue

      if (v === row[x + 1] && v === rowDown[x] && v === rowDown[x + 1]) {
        mark(base + x)
        mark(base + x + 1)
        mark(base + W + x)
        mark(base + W + x + 1)
      }
    }
  }

  return { marks, removedCount }
}

function applyGravity(board, marks) {
  const H = board.length
  const W = board[0].length

  return board.map((row, y) => {
    const base = y * W
    const kept = []

    for (let x = 0; x < W; x++) {
      if (marks[base + x] === 0) kept.push(row[x])
    }

    while (kept.length < W) kept.push(NULL_VALUE)
    return kept
  });
}

function step(state) {
  const { board, removedTotal } = state
  const { marks, removedCount } = scanDeletions(board)

  if (removedCount === 0) return null

  const nextBoard = applyGravity(board, marks)
  return {
    board: nextBoard,
    removedTotal: removedTotal + removedCount,
  }
}

function run(initialState) {
  let state = initialState
  while (true) {
    const next = step(state)
    if (!next) return state
    state = next
  }
}

function solution(m, n, board) {
  const rotated = rotateBoard(board)
  const finalState = run({ board: rotated, removedTotal: 0 })
  return finalState.removedTotal
}
