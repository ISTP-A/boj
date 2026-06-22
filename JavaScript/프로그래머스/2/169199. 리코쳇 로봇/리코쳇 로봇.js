function solution(board) {
    const visited_map = Array.from(
      { length: board.length },
      (_, i) => Array(board[i].length).fill(0)
    )
    
    const next_pos = [[...find_start_pos(board), 0]]
    
    while(0 < next_pos.length) {
        const [pos_x, pos_y, count] = next_pos.shift()
        if(board[pos_y][pos_x] === "G") return count
        
        if(visited_map[pos_y][pos_x] === 1) continue
        visited_map[pos_y][pos_x] = 1
        
        next_pos.push(
            ...find_available_pos(board, pos_x, pos_y).map(pos => [...pos, count+1])
        )
    } 
    return -1
}

function find_start_pos(board) {
    for(let y = 0; y < board.length; y++) {
       for(let x = 0; x < board[0].length; x++) {
           if(board[y][x] === "R") return [x, y] 
       } 
    }
    
    return [-1, -1]
}

function find_available_pos(board, x, y) {
    const dy = [-1, 1, 0, 0]
    const dx = [0, 0, -1, 1]
    
    const available_pos = []
    
    for(let i = 0; i < 4; i++) {
        let cx = x
        let cy = y
        
        while(can_move(board, cx + dx[i],  cy + dy[i])) {
            cx += dx[i]
            cy += dy[i]
        }
        
        available_pos.push([cx, cy])
    }
    
    return available_pos
}

function can_move(board, x, y) {
    if(!is_valid_pos(board, x, y)) return false
    return board[y][x] !== "D"
}

function is_valid_pos(board, x, y) {
    return x >= 0 && y >= 0 && board.length > y && board[0].length > x
}