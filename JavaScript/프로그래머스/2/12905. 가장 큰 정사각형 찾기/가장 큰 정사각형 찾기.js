function solution(board) {
    const h = board.length
    const w = board[0].length

    const dp = Array.from({ length: h }, () => Array(w).fill(0))

    let maxSize = 0
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (board[y][x] === 0) dp[y][x] = 0
            else if(y === 0 || x === 0)dp[y][x] = 1
            else dp[y][x] = Math.min(dp[y - 1][x], dp[y][x - 1], dp[y - 1][x - 1]) + 1

            if (dp[y][x] > maxSize) maxSize = dp[y][x]
        }
    }

    return maxSize * maxSize
}
