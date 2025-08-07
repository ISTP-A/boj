const DIV_VALUE = 1_234_567

function fibonacci(n) {
    if(n < 2) return n
    
    let prev = 0, cur = 1
    
    for(let i = 2; i <= n; i ++) {
        const temp = (prev + cur) % DIV_VALUE
        prev = cur
        cur = temp 
    }
    
    return cur
}

function solution(n) {
    return fibonacci(n)
}