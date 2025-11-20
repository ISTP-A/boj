function solution(board) {
  const n = board.length
  const m = board[0].length

  const dp = Array.from({ length: n }, () => Array(m).fill(0))

  let maxSide = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

      if (board[i][j] === 0) {
        dp[i][j] = 0
      } else {

        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          const top = dp[i - 1][j]
          const left = dp[i][j - 1]
          const diagonal = dp[i - 1][j - 1]
          dp[i][j] = Math.min(top, left, diagonal) + 1
        }
      }

      if (dp[i][j] > maxSide) {
        maxSide = dp[i][j]
      }
    }
  }

  return maxSide * maxSide
}
