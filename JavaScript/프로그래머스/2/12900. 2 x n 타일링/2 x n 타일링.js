function solution(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    
    const mod = 1_000_000_007
    
    let tmp1 = 1
    let tmp2 = 2
    
    for(let i = 3; i <= n; i++) {
        const backup = tmp2
        tmp2 = tmp1 + tmp2 % mod
        tmp1 = backup
    }
    
    return tmp2 % mod
}