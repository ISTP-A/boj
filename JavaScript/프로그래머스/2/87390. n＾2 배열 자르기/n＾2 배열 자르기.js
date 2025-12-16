function solution(n, left, right) {
    var answer = [];
    
    let row = Math.floor(left / n)
    let col = left % n
    
    while(row * n + col <= right) {
        answer.push((col < row ? row : col) + 1)
        
        if(col === n-1) {
            col = 0
            row += 1
        }
        else {
            col++
        }
    }
    
    return answer
}
