const DELETE_MARK = '#'
const NULL_VALUE = '@'

function can_remove(board, x, y) {
    return board[y][x] !== NULL_VALUE &&
        board[y][x] === board[y+1][x+1] &&
        board[y][x] === board[y+1][x] &&
        board[y][x]=== board[y][x+1]
}

function mark(board, x, y) {
    board[y][x] = DELETE_MARK
    board[y+1][x+1] = DELETE_MARK
    board[y+1][x] = DELETE_MARK
    board[y][x+1] = DELETE_MARK
}

function scan_board_and_marking(board) {
    let deletable = false
    const result = Array.from({ length: board.length }, () => Array(board[0].length).fill('0'))
    
    for(let y = 0; y < board.length-1; y++) {
        for(let x = 0; x < board[0].length-1; x++) {
            if(can_remove(board,x, y)) {
                mark(result, x, y)
                deletable = true
            }
        }
    }
    
    return { result, deletable }
}

function remove(board, scaned) {
    const new_board = []
    for(let i = 0; i < board.length; i++) {
        const line = Array(board[0].length).fill(NULL_VALUE)
        let pos = 0
        for(let j = 0; j < board[0].length; j++) {
            if(scaned[i][j] !== DELETE_MARK) line[pos++] = board[i][j]
        }
        new_board.push(line)
    }
    
    return new_board
}

function rotate_board(board) {
    const new_board = []
    for(let j = 0; j < board[0].length; j++) {
        const line = []
        for(let i = board.length - 1; i >= 0; i--) line.push(board[i][j])
        new_board.push(line)
    }
    return new_board
}

function get_block_count(board) {
    let count = 0
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] !== NULL_VALUE) count++
        }
    }
    return count
}

function solution(m, n, board) {
    let new_board = rotate_board(board)
    while(true) {
        const scaned = scan_board_and_marking(new_board)
        if(!scaned.deletable) break
        new_board = remove(new_board, scaned.result)
    }
    return m * n - get_block_count(new_board)
}