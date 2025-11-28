const direct = {
    U: { x: 0, y: -1 },
    D: { x: 0, y: 1 },
    L: { x: -1, y: 0 },
    R: { x: 1, y: 0 },
}

function rangeValidator(min, max) {
    return function validate(value) {
        return min <= value && value <= max
    }
}

function solution(dirs) {
    const visited = new Set()
    const isRange = rangeValidator(0, 10)
    const pos = { x: 5, y: 5 }
    
    for (let i = 0; i < dirs.length; i++) {
        const move = direct[dirs[i]]
        const nx = pos.x + move.x
        const ny = pos.y + move.y

        if (!isRange(nx) || !isRange(ny)) continue

        const from = `${pos.x}.${pos.y}`
        const to = `${nx}.${ny}`
        const key = from < to ? `${from}-${to}` : `${to}-${from}`

        visited.add(key)

        pos.x = nx
        pos.y = ny
    }
    
    return visited.size
}