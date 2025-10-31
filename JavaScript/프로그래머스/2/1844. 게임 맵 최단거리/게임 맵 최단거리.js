function isVisited(value) {
    return value === 0
}

function isValidPos(pos, max_pos) {
    return 0 <= pos && pos <= max_pos
}

function solution(maps) {
    const destX = maps[0].length - 1
    const destY = maps.length - 1
    
    const visited = maps.map(inner => [...inner])
    
    const queue = [[0, 0, 1]]
    
    while(0 < queue.length) {
        const [x, y, count] = queue.shift()
        
        if(destX === x && destY === y) return count
        
        const dx = [0, 0, -1, 1]
        const dy = [-1, 1, 0, 0]
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if(isValidPos(nx, destX) && isValidPos(ny, destY) && !isVisited(visited[ny][nx])) {
                visited[ny][nx] = 0
                queue.push([nx, ny, count + 1])
            }
        }
    }
    
    return -1
}