const DIV_VALUE = 1_234_567

function fibonacci(n) {
    let prev = 0
    let cur = 1
    
    if(n === 0) return prev
    else if(n === 1) return cur
    
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