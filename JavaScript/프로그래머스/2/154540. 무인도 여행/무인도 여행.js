const X = "X"
const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

function solution(maps) {
  const grid = maps.map((row) => row.split(""))
  const R = grid.length
  const C = grid[0].length

  const answer = []

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] === X) continue

      let count = 0
      const queue = [[j, i]]
      let head = 0

      count += Number(grid[i][j])
      grid[i][j] = X

      while (head < queue.length) {
        const [cx, cy] = queue[head++]

        for (let d = 0; d < 4; d++) {
          const nx = cx + dx[d]
          const ny = cy + dy[d]

          if (nx < 0 || nx >= C || ny < 0 || ny >= R) continue
          if (grid[ny][nx] === X) continue

          count += Number(grid[ny][nx])
          grid[ny][nx] = X
          queue.push([nx, ny])
        }
      }

      answer.push(count)
    }
  }

  if (answer.length === 0) return [-1]
  answer.sort((a, b) => a - b)
  return answer
}
