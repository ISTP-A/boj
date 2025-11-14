const MOD = 1_000_000_007

const isOdd = (num) => num % 2 === 1

function solution(n) {
    if(isOdd(n)) return 0
    if(n === 4) return 11
    
    const dp = Array(n).fill(0)
    
    dp[0] = 1
    dp[2] = 3
    dp[4] = 11
    
    const f = (num) => {
        const prev = num - 2
        let v = (dp[prev] * 3) % MOD
        for(let i = prev - 2; i >= 0; i -= 2) {
            v = (v + (dp[i] * 2)) % MOD
        }
        return v
    }
    
    for(let i = 4; i <= n; i += 2) {
        dp[i] = f(i)
    }
    
    return dp[n]
}