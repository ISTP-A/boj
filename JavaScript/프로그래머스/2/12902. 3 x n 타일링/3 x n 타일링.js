const MOD = 1_000_000_007

function solution(n) {
  if (n % 2 === 1) return 0
  const dp = Array(n + 1).fill(0)

  dp[0] = 1
  dp[2] = 3

  for (let i = 4; i <= n; i += 2) {
    dp[i] = (4 * dp[i - 2] - dp[i - 4]) % MOD
    if (dp[i] < 0) dp[i] += MOD
  }

  return dp[n]
}
