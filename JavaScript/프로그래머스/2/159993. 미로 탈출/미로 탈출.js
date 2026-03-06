const obj = {
    start: 'S',
    end: 'E',
    lever: 'L',
    wall: 'X',
    road: 'O',
};

function canMove(value) {
    return value !== obj.wall;
}

function isValidXY(x, y, maps) {
    return 0 <= x && x < maps[0].length && 0 <= y && y < maps.length
}

function createVisitedArray(maps) {
    return Array.from({ length: maps.length }, () =>
        Array(maps[0].length).fill(false)
    )
}

function findPosition(maps, target) {
    for (let y = 0; y < maps.length; y++) {
        for (let x = 0; x < maps[0].length; x++) {
            if (maps[y][x] === target) return [x, y]
        }
    }
    return null
}

function bfs(maps, startX, startY, target) {
    const visited = createVisitedArray(maps)
    const queue = [[startX, startY, 0]]
    visited[startY][startX] = true

    const dx = [0, 0, -1, 1]
    const dy = [-1, 1, 0, 0]

    let head = 0
    while (head < queue.length) {
        const [x, y, dist] = queue[head++]

        if (maps[y][x] === target) {
            return [x, y, dist]
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]

            if (isValidXY(nx, ny, maps) && !visited[ny][nx] && canMove(maps[ny][nx])) {
                visited[ny][nx] = true
                queue.push([nx, ny, dist + 1])
            }
        }
    }

    return null
}

function solution(maps) {
    const start = findPosition(maps, obj.start)
    if (!start) return -1

    const leverResult = bfs(maps, start[0], start[1], obj.lever)
    if (!leverResult) return -1

    const endResult = bfs(maps, leverResult[0], leverResult[1], obj.end)
    if (!endResult) return -1

    return leverResult[2] + endResult[2]
}