const Load =  '#'

function isLoad(value) {
    return value === Load
}

function isValidPos(max, pos) {
    return 0 <= pos && pos < max
}

function crain(table, target) {
    for(let i = 0; i < table.length; i++) {
        for(let j = 0; j < table[0].length; j++) {
            if(table[i][j] === target) table[i][j] = Load
        }
    }
}

function wrapLoad(storage) {
    return [
        Array(storage[0].length + 2).fill(Load),
        ...storage.map(s => [Load, ...s, Load]),
        Array(storage[0].length + 2).fill(Load),
    ]
}

function solution(storage, requests) {
    
    const load_table = wrapLoad(storage)
    const w = load_table[0].length
    const h = load_table.length
    
    
    function bfs(table, x, y, target, visited) {
        visited[y][x] = true
        if(target === table[y][x]) return true
        
        const dx = [0, 0, -1, 1]
        const dy = [-1, 1, 0, 0]
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            if(isValidPos(w, nx) && isValidPos(h, ny) && !visited[ny][nx]) {
                const next = table[ny][nx]
                if(next === target) {
                    table[ny][nx] = Load
                    visited[ny][nx] = true
                }
                if(isLoad(next)) bfs(table, nx, ny, target, visited)
            }
        }
    }
    
    for(let i = 0; i < requests.length; i++) {
        const request = requests[i]
        if(request.length === 1) {
            const visited = Array.from({ length: h }, () => Array(w).fill(false))
            bfs(load_table, 0, 0, request, visited)
        }
        else crain(load_table, request[0])
    }
    
    let count = 0
    for(let y = 0; y < h; y++) {
        for(let x = 0; x < w; x++) {
            if(!isLoad(load_table[y][x])) count++
        }
    }
    
    
    return count
}