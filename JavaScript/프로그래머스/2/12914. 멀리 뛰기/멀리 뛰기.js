function solution(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    
    let a = 1
    let b = 2
    
    for(let i = 3; i <= n; i++) {
        const tmp = a
        a = b
        b = tmp + b % 1234567
    }
    
    return b % 1234567
}